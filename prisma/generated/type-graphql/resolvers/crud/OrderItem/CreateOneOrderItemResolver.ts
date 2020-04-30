import * as TypeGraphQL from "type-graphql";
import { CreateOneOrderItemArgs } from "./args/CreateOneOrderItemArgs";
import { OrderItem } from "../../../models/OrderItem";

@TypeGraphQL.Resolver(_of => OrderItem)
export class CreateOneOrderItemResolver {
  @TypeGraphQL.Mutation(_returns => OrderItem, {
    nullable: false,
    description: undefined
  })
  async createOneOrderItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneOrderItemArgs): Promise<OrderItem> {
    return ctx.prisma.orderItem.create(args);
  }
}
