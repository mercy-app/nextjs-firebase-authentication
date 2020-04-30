import * as TypeGraphQL from "type-graphql";
import { FindManyOrderItemArgs } from "./args/FindManyOrderItemArgs";
import { OrderItem } from "../../../models/OrderItem";

@TypeGraphQL.Resolver(_of => OrderItem)
export class FindManyOrderItemResolver {
  @TypeGraphQL.Query(_returns => [OrderItem], {
    nullable: false,
    description: undefined
  })
  async orderItems(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyOrderItemArgs): Promise<OrderItem[]> {
    return ctx.prisma.orderItem.findMany(args);
  }
}
