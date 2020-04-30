import * as TypeGraphQL from "type-graphql";
import { CreateOneCustomerArgs } from "./args/CreateOneCustomerArgs";
import { Customer } from "../../../models/Customer";

@TypeGraphQL.Resolver(_of => Customer)
export class CreateOneCustomerResolver {
  @TypeGraphQL.Mutation(_returns => Customer, {
    nullable: false,
    description: undefined
  })
  async createOneCustomer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneCustomerArgs): Promise<Customer> {
    return ctx.prisma.customer.create(args);
  }
}
