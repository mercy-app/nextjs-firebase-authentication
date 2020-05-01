import { Resolver, Query, Arg, Int, Mutation, ID } from "type-graphql";
import { Order } from '@prismaTypes/models/Order'
import { OrderCreateInput } from '@prismaTypes/resolvers/inputs/OrderCreateInput'

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

@Resolver()
export default class OrderResolver {

    @Query(returns => [Order], { description: "Get all the Orders" })
    async orders(
        @Arg("status", type => String, { nullable: true }) status: string,
        @Arg("limit", type => Int, { defaultValue: 50 }) limit: number,
        @Arg("searchText", type => String, { defaultValue: "" }) searchText: string
    ): Promise<Order[] | undefined> {
        const companyId = ''
        const orders = await prisma.order.findMany({
            where: {
                status,
                title: {
                    startsWith: searchText
                },
                company: {
                    id: companyId
                }
            },
            first: limit
        })
        return orders
    }

    @Query(returns => Order, { description: "Get single order" })
    async order(@Arg("id", type => ID) id: string): Promise<Order | undefined> {
        const order = await prisma.order.findOne({
            where: {
                id
            }
        })
        return order;
    }



    @Query(() => [Order], { description: 'Get all user Orders' })
    async userOrders(
        @Arg('user', type => Int) user: number,
        @Arg('text', type => String, { nullable: true }) text: string,
        @Arg('limit', type => Int, { defaultValue: 7 }) limit: number
    ): Promise<Order[]> {
        // return await take(this.items.filter(item => item.userId === user), limit);
        const orders = await prisma.order.findMany({
            where: {
                user: {
                    id: user
                },
                product: {
                    every: {
                        title: {
                            startsWith: text
                        }
                    }
                }
            },
            first: limit
        })
        return orders;
    }


    @Mutation(() => Order, { description: 'Add an Order' })
    async addOrder(@Arg('orderInput') orderInput: OrderCreateInput): Promise<Order> {
        const order = await prisma.order.create(orderInput)
        return order;
    }
    // @Mutation(returns => Order, { description: 'Add an Order' })
    // async addOrder(@Arg('orderInput') orderInput: Order): Promise<Order> {
    //   console.log(orderInput, 'orderinput');
    //   return await orderInput;
    // }
}
