import * as TypeGraphQL from "type-graphql";
import { DeleteOneOrderArgs } from "./args/DeleteOneOrderArgs";
import { Order } from "../../../models/Order";

@TypeGraphQL.Resolver(_of => Order)
export class DeleteOneOrderResolver {
  @TypeGraphQL.Mutation(_returns => Order, {
    nullable: true,
    description: undefined
  })
  async deleteOneOrder(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneOrderArgs): Promise<Order | null> {
    return ctx.prisma.order.delete(args);
  }
}
