import * as TypeGraphQL from "type-graphql";
import { CreateOneAddressArgs } from "./args/CreateOneAddressArgs";
import { Address } from "../../../models/Address";

@TypeGraphQL.Resolver(_of => Address)
export class CreateOneAddressResolver {
  @TypeGraphQL.Mutation(_returns => Address, {
    nullable: false,
    description: undefined
  })
  async createOneAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneAddressArgs): Promise<Address> {
    return ctx.prisma.address.create(args);
  }
}
