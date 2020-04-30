import * as TypeGraphQL from "type-graphql";
import { UpsertOneCustomerArgs } from "./args/UpsertOneCustomerArgs";
import { Customer } from "../../../models/Customer";

@TypeGraphQL.Resolver(_of => Customer)
export class UpsertOneCustomerResolver {
  @TypeGraphQL.Mutation(_returns => Customer, {
    nullable: false,
    description: undefined
  })
  async upsertOneCustomer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneCustomerArgs): Promise<Customer> {
    return ctx.prisma.customer.upsert(args);
  }
}
