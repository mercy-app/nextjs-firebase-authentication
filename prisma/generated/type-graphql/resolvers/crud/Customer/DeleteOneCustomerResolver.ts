import * as TypeGraphQL from "type-graphql";
import { DeleteOneCustomerArgs } from "./args/DeleteOneCustomerArgs";
import { Customer } from "../../../models/Customer";

@TypeGraphQL.Resolver(_of => Customer)
export class DeleteOneCustomerResolver {
  @TypeGraphQL.Mutation(_returns => Customer, {
    nullable: true,
    description: undefined
  })
  async deleteOneCustomer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneCustomerArgs): Promise<Customer | null> {
    return ctx.prisma.customer.delete(args);
  }
}
