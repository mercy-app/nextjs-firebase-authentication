import * as TypeGraphQL from "type-graphql";
import { DeleteManyCustomerArgs } from "./args/DeleteManyCustomerArgs";
import { Customer } from "../../../models/Customer";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Customer)
export class DeleteManyCustomerResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyCustomer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCustomerArgs): Promise<BatchPayload> {
    return ctx.prisma.customer.deleteMany(args);
  }
}
