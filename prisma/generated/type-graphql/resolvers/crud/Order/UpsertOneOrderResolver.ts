import * as TypeGraphQL from "type-graphql";
import { UpsertOneOrderArgs } from "./args/UpsertOneOrderArgs";
import { Order } from "../../../models/Order";

@TypeGraphQL.Resolver(_of => Order)
export class UpsertOneOrderResolver {
  @TypeGraphQL.Mutation(_returns => Order, {
    nullable: false,
    description: undefined
  })
  async upsertOneOrder(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneOrderArgs): Promise<Order> {
    return ctx.prisma.order.upsert(args);
  }
}
