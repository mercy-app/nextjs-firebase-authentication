import { Resolver, Query, Arg, ID, Mutation } from 'type-graphql';
import { Staff } from '@prismaTypes/models/Staff'
import { StaffCreateInput } from '@prismaTypes/resolvers/inputs/StaffCreateInput'
// import Stuff from './stuff.type';
// import loadStuffs from '../../data/stuff.data';
// import AddStuffInput from './stuff.input_type';
// import search from '../../helpers/search';

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

@Resolver()
export default class StuffResolver {

    @Query(() => [Staff])
    async staffs(
        @Arg('role', { nullable: true }) role?: string,
        @Arg('searchBy', { nullable: true }) searchBy?: string
    ): Promise<Staff[] | undefined> {

        const staffs = await prisma.staff.findMany({
            where: {
                user: {
                    name: searchBy
                },
                role
            }
        })
        return staffs
    }
    @Query(() => Staff)
    async staff(@Arg('id', type => ID) id: string): Promise<Staff | undefined> {
        // as auth Stuff. check from middleware.
        const staff = await prisma.staff.findOne({
            where: {
                id
            }
        })
        return staff;
    }

    @Mutation(() => Staff, { description: 'Create Staff' })
    async createStuff(@Arg('staff') staff: StaffCreateInput): Promise<Staff> {
        const newStaff = await prisma.staff.create(staff)
        return newStaff;
    }

    //   @Mutation(() => Stuff, { description: 'Add or Edit Address' })
    //   async updateAddress(
    //     @Arg('addressInput') addressInput: string
    //   ): Promise<Stuff> {
    //     console.log(addressInput, 'addressinput');
    //     return await this.stuffsCollection[0];
    //   }

    //   @Mutation(() => Stuff, { description: 'Add or Edit Contact' })
    //   async updateContact(
    //     @Arg('contactInput') contactInput: string
    //   ): Promise<Stuff> {
    //     console.log(contactInput, 'contactinput');
    //     return await this.stuffsCollection[0];
    //   }

    //   @Mutation(() => Stuff, { description: 'Delete Address' })
    //   async deleteAddress(@Arg('addressId') addressId: string): Promise<Stuff> {
    //     console.log(addressId, 'address_id');
    //     return await this.stuffsCollection[0];
    //   }

    //   @Mutation(() => Stuff, { description: 'Delete Contact' })
    //   async deleteContact(@Arg('contactId') contactId: string): Promise<Stuff> {
    //     console.log(contactId, 'contact_id');
    //     return await this.stuffsCollection[0];
    //   }

    //   @Mutation(() => Stuff, { description: 'Add Payment Card' })
    //   async addPaymentCard(@Arg('cardInput') cardInput: string): Promise<Stuff> {
    //     console.log(cardInput, 'cardInput');
    //     return await this.stuffsCollection[0];
    //   }

    //   @Mutation(() => Stuff, { description: 'Delete Payment Card' })
    //   async deletePaymentCard(@Arg('cardId') cardId: string): Promise<Stuff> {
    //     console.log(cardId, 'card_id');
    //     return await this.stuffsCollection[0];
    //   }
}
