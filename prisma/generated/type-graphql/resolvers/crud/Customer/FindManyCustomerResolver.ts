import * as TypeGraphQL from "type-graphql";
import { FindManyCustomerArgs } from "./args/FindManyCustomerArgs";
import { Customer } from "../../../models/Customer";

@TypeGraphQL.Resolver(_of => Customer)
export class FindManyCustomerResolver {
  @TypeGraphQL.Query(_returns => [Customer], {
    nullable: false,
    description: undefined
  })
  async customers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCustomerArgs): Promise<Customer[]> {
    return ctx.prisma.customer.findMany(args);
  }
}
