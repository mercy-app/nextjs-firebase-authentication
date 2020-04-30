import * as TypeGraphQL from "type-graphql";
import { UpdateOneAddressArgs } from "./args/UpdateOneAddressArgs";
import { Address } from "../../../models/Address";

@TypeGraphQL.Resolver(_of => Address)
export class UpdateOneAddressResolver {
  @TypeGraphQL.Mutation(_returns => Address, {
    nullable: true,
    description: undefined
  })
  async updateOneAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneAddressArgs): Promise<Address | null> {
    return ctx.prisma.address.update(args);
  }
}
