import * as TypeGraphQL from "type-graphql";
import { CreateOneOrderArgs } from "./args/CreateOneOrderArgs";
import { Order } from "../../../models/Order";

@TypeGraphQL.Resolver(_of => Order)
export class CreateOneOrderResolver {
  @TypeGraphQL.Mutation(_returns => Order, {
    nullable: false,
    description: undefined
  })
  async createOneOrder(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneOrderArgs): Promise<Order> {
    return ctx.prisma.order.create(args);
  }
}
