import * as TypeGraphQL from "type-graphql";
import { DeleteManyOrderItemArgs } from "./args/DeleteManyOrderItemArgs";
import { OrderItem } from "../../../models/OrderItem";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => OrderItem)
export class DeleteManyOrderItemResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyOrderItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyOrderItemArgs): Promise<BatchPayload> {
    return ctx.prisma.orderItem.deleteMany(args);
  }
}
