import * as TypeGraphQL from "type-graphql";
import { FindOneCustomerArgs } from "./args/FindOneCustomerArgs";
import { Customer } from "../../../models/Customer";

@TypeGraphQL.Resolver(_of => Customer)
export class FindOneCustomerResolver {
  @TypeGraphQL.Query(_returns => Customer, {
    nullable: true,
    description: undefined
  })
  async customer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneCustomerArgs): Promise<Customer | null> {
    return ctx.prisma.customer.findOne(args);
  }
}
