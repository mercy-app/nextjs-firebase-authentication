import * as TypeGraphQL from "type-graphql";
import { UpdateOneCustomerArgs } from "./args/UpdateOneCustomerArgs";
import { Customer } from "../../../models/Customer";

@TypeGraphQL.Resolver(_of => Customer)
export class UpdateOneCustomerResolver {
  @TypeGraphQL.Mutation(_returns => Customer, {
    nullable: true,
    description: undefined
  })
  async updateOneCustomer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneCustomerArgs): Promise<Customer | null> {
    return ctx.prisma.customer.update(args);
  }
}
