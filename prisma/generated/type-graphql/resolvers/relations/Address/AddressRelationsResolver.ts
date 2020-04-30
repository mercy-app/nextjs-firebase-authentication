import * as TypeGraphQL from "type-graphql";
import { Address } from "../../../models/Address";
import { Company } from "../../../models/Company";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver(_of => Address)
export class AddressRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Company, {
    nullable: true,
    description: undefined,
  })
  async company(@TypeGraphQL.Root() address: Address, @TypeGraphQL.Ctx() ctx: any): Promise<Company | null> {
    return ctx.prisma.address.findOne({
      where: {
        id: address.id,
      },
    }).company({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true,
    description: undefined,
  })
  async user(@TypeGraphQL.Root() address: Address, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return ctx.prisma.address.findOne({
      where: {
        id: address.id,
      },
    }).user({});
  }
}
