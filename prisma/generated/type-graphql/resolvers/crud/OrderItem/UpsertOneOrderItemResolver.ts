import * as TypeGraphQL from "type-graphql";
import { UpsertOneOrderItemArgs } from "./args/UpsertOneOrderItemArgs";
import { OrderItem } from "../../../models/OrderItem";

@TypeGraphQL.Resolver(_of => OrderItem)
export class UpsertOneOrderItemResolver {
  @TypeGraphQL.Mutation(_returns => OrderItem, {
    nullable: false,
    description: undefined
  })
  async upsertOneOrderItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneOrderItemArgs): Promise<OrderItem> {
    return ctx.prisma.orderItem.upsert(args);
  }
}
