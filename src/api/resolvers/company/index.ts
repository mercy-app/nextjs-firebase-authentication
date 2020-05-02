import {
    Resolver, Query, Ctx,
    Arg, ID, Mutation, UseMiddleware
} from 'type-graphql';
import { Company } from '@prismaTypes/models/Company'
import NewCompany from './newCompany.type';
import { EXPIRES_IN } from '@constants/cookie';



import AddCompanyInput from './company.input_type'
import { isAuthenticated } from '@api/middleware/resolver/isAuthenticated';
import { ResolverContext } from '@typeDefs/resolver';
import firebaseAdmin from '@services/firebase/admin';
import firebase from '@services/firebase/client';

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

@Resolver()
export default class CompanyResolver {
    @UseMiddleware(isAuthenticated)
    @Query(returns => [Company], { description: 'Get all the categories' })
    async myCompanies(@Ctx() ctx: ResolverContext
    ): Promise<Company[]> {
        const companies = await prisma.company.findMany({
            where: {
                staffs: {
                    every: {
                        user: {
                            id: ctx.me.uid
                        }
                    }
                }
            }
        });
        return companies
    }

    @UseMiddleware(isAuthenticated)
    @Mutation(() => NewCompany, { description: 'Create Company' })
    async createCompany(
        @Arg('company') company: AddCompanyInput,
        @Ctx() ctx: ResolverContext
    ): Promise<NewCompany> {

        const user = await prisma.user.findOne({
            where: {
                id: ctx.me.uid
            },
            include: {
                contacts: true,
                addresses: true
            }
        });
        const companyAddress = user.addresses.find(item => {
            return item.id === company.addressId;
        });

        const companyContact = user.contacts.find(item => {
            return item.id === company.contactId;
        });

        if (companyContact && companyAddress) {
            delete companyContact.id;
            delete companyContact.userId;
            delete companyContact.companyId;

            delete companyAddress.id;
            delete companyAddress.userId;
            delete companyAddress.companyId;

            const newCompany = await prisma.company.create({
                data: {
                    name,
                    description: company.description,
                    address: { create: { ...companyAddress } },
                    contact: { create: { ...companyContact } },
                    platform: { connect: { id: company.platformId } },
                    owner: {
                        connect: {
                            id: ctx.me.uid
                        }
                    },
                    staffs: {
                        create: {
                            role: 'OWNER',
                            user: {
                                connect: {
                                    id: ctx.me.uid
                                }
                            }
                        }
                    }
                },
                include: {
                    staffs: true
                }
            });
            // TIP: Set new claims
            const claims = { role: newCompany.staffs[0].role, companyId: newCompany.id }

            await firebaseAdmin.auth().setCustomUserClaims(ctx.me.uid, {
                ...ctx.me.customClaims,
                ...claims,
            });

            // TIP: get new token with custom claim
            const token = await firebaseAdmin
                .auth()
                .createSessionCookie(company.token, {
                    expiresIn: EXPIRES_IN,
                });

            await firebase.auth().signOut();

            return {
                token,
                company: newCompany
            }
        }
    }