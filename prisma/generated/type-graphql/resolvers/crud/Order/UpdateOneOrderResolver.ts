import * as TypeGraphQL from "type-graphql";
import { UpdateOneOrderArgs } from "./args/UpdateOneOrderArgs";
import { Order } from "../../../models/Order";

@TypeGraphQL.Resolver(_of => Order)
export class UpdateOneOrderResolver {
  @TypeGraphQL.Mutation(_returns => Order, {
    nullable: true,
    description: undefined
  })
  async updateOneOrder(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneOrderArgs): Promise<Order | null> {
    return ctx.prisma.order.update(args);
  }
}
