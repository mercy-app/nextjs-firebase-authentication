import * as TypeGraphQL from "type-graphql";
import { FindOneOrderItemArgs } from "./args/FindOneOrderItemArgs";
import { OrderItem } from "../../../models/OrderItem";

@TypeGraphQL.Resolver(_of => OrderItem)
export class FindOneOrderItemResolver {
  @TypeGraphQL.Query(_returns => OrderItem, {
    nullable: true,
    description: undefined
  })
  async orderItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneOrderItemArgs): Promise<OrderItem | null> {
    return ctx.prisma.orderItem.findOne(args);
  }
}
