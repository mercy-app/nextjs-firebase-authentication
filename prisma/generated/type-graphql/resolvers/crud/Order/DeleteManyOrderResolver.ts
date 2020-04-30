import * as TypeGraphQL from "type-graphql";
import { DeleteManyOrderArgs } from "./args/DeleteManyOrderArgs";
import { Order } from "../../../models/Order";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Order)
export class DeleteManyOrderResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyOrder(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyOrderArgs): Promise<BatchPayload> {
    return ctx.prisma.order.deleteMany(args);
  }
}
