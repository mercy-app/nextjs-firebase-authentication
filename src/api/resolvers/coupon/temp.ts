import { Resolver, Mutation, Arg, Query } from 'type-graphql';
// import loadCoupons from '../../data/coupon.data';
// import Coupon from './coupon.type';
// import AddCouponInput from './coupon.input_type';
// import search from '../../helpers/search';

import { Coupon } from '@prismaTypes/models/Coupon'
// import Coupon from './coupon.type';
import AddCouponInput from './coupon.input_type';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

@Resolver()
export default class CouponResolver {

    @Query(returns => [Coupon], { description: 'Get All Coupons' })
    async coupons(
        @Arg('status', { nullable: true }) status?: string,
        @Arg('searchBy', { nullable: true }) searchBy?: string
    ): Promise<Coupon[] | undefined> {
        const coupons = await prisma.coupon.findMany({
            where: {
                title: {
                    startsWith: searchBy
                },
                status: status
            }
        })
        return coupons;
    }

    @Mutation(returns => Coupon)
    async createCoupon(
        @Arg('coupon') coupon: AddCouponInput
    ): Promise<Coupon | undefined> {
        const newCoupon = await prisma.coupon.create(coupon)

        return newCoupon;
    }

    @Query(() => [Coupon], { description: 'Get all the Coupons' })
    async allCoupons(): Promise<Coupon[]> {
        const coupons = await prisma.coupon.findMany()
        return coupons;
    }

    @Mutation(() => Coupon)
    async applyCoupon(@Arg('code') code: string): Promise<Coupon> {
        const coupon = await prisma.coupon.update({
            where: {
                code
            },
            data: {
                status: 'revoked'
            }
        })
        return coupon;
    }
}
