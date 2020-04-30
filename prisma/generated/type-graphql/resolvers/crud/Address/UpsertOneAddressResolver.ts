import * as TypeGraphQL from "type-graphql";
import { UpsertOneAddressArgs } from "./args/UpsertOneAddressArgs";
import { Address } from "../../../models/Address";

@TypeGraphQL.Resolver(_of => Address)
export class UpsertOneAddressResolver {
  @TypeGraphQL.Mutation(_returns => Address, {
    nullable: false,
    description: undefined
  })
  async upsertOneAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneAddressArgs): Promise<Address> {
    return ctx.prisma.address.upsert(args);
  }
}
