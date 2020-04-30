import * as TypeGraphQL from "type-graphql";
import { UpdateManyOrderArgs } from "./args/UpdateManyOrderArgs";
import { Order } from "../../../models/Order";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Order)
export class UpdateManyOrderResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyOrder(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyOrderArgs): Promise<BatchPayload> {
    return ctx.prisma.order.updateMany(args);
  }
}
