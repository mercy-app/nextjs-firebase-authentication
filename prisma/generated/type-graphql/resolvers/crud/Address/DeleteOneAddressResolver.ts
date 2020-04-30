import * as TypeGraphQL from "type-graphql";
import { DeleteOneAddressArgs } from "./args/DeleteOneAddressArgs";
import { Address } from "../../../models/Address";

@TypeGraphQL.Resolver(_of => Address)
export class DeleteOneAddressResolver {
  @TypeGraphQL.Mutation(_returns => Address, {
    nullable: true,
    description: undefined
  })
  async deleteOneAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneAddressArgs): Promise<Address | null> {
    return ctx.prisma.address.delete(args);
  }
}
