import * as TypeGraphQL from "type-graphql";
import { UpdateOneOrderItemArgs } from "./args/UpdateOneOrderItemArgs";
import { OrderItem } from "../../../models/OrderItem";

@TypeGraphQL.Resolver(_of => OrderItem)
export class UpdateOneOrderItemResolver {
  @TypeGraphQL.Mutation(_returns => OrderItem, {
    nullable: true,
    description: undefined
  })
  async updateOneOrderItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneOrderItemArgs): Promise<OrderItem | null> {
    return ctx.prisma.orderItem.update(args);
  }
}
