import * as TypeGraphQL from "type-graphql";
import { DeleteOneOrderItemArgs } from "./args/DeleteOneOrderItemArgs";
import { OrderItem } from "../../../models/OrderItem";

@TypeGraphQL.Resolver(_of => OrderItem)
export class DeleteOneOrderItemResolver {
  @TypeGraphQL.Mutation(_returns => OrderItem, {
    nullable: true,
    description: undefined
  })
  async deleteOneOrderItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneOrderItemArgs): Promise<OrderItem | null> {
    return ctx.prisma.orderItem.delete(args);
  }
}
