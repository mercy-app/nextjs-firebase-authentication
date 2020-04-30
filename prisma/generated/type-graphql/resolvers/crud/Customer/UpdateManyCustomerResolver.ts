import * as TypeGraphQL from "type-graphql";
import { UpdateManyCustomerArgs } from "./args/UpdateManyCustomerArgs";
import { Customer } from "../../../models/Customer";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Customer)
export class UpdateManyCustomerResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyCustomer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCustomerArgs): Promise<BatchPayload> {
    return ctx.prisma.customer.updateMany(args);
  }
}
