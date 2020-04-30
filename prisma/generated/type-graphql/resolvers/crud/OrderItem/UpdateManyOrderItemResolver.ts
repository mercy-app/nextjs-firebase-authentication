import * as TypeGraphQL from "type-graphql";
import { UpdateManyOrderItemArgs } from "./args/UpdateManyOrderItemArgs";
import { OrderItem } from "../../../models/OrderItem";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => OrderItem)
export class UpdateManyOrderItemResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyOrderItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyOrderItemArgs): Promise<BatchPayload> {
    return ctx.prisma.orderItem.updateMany(args);
  }
}
