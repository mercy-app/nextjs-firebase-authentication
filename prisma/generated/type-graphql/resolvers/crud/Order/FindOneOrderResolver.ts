import * as TypeGraphQL from "type-graphql";
import { FindOneOrderArgs } from "./args/FindOneOrderArgs";
import { Order } from "../../../models/Order";

@TypeGraphQL.Resolver(_of => Order)
export class FindOneOrderResolver {
  @TypeGraphQL.Query(_returns => Order, {
    nullable: true,
    description: undefined
  })
  async order(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneOrderArgs): Promise<Order | null> {
    return ctx.prisma.order.findOne(args);
  }
}
