import * as TypeGraphQL from "type-graphql";
import { FindManyOrderArgs } from "./args/FindManyOrderArgs";
import { Order } from "../../../models/Order";

@TypeGraphQL.Resolver(_of => Order)
export class FindManyOrderResolver {
  @TypeGraphQL.Query(_returns => [Order], {
    nullable: false,
    description: undefined
  })
  async orders(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyOrderArgs): Promise<Order[]> {
    return ctx.prisma.order.findMany(args);
  }
}
