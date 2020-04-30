import * as TypeGraphQL from "type-graphql";
import { Company } from "../../../models/Company";
import { Contact } from "../../../models/Contact";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver(_of => Contact)
export class ContactRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Company, {
    nullable: true,
    description: undefined,
  })
  async company(@TypeGraphQL.Root() contact: Contact, @TypeGraphQL.Ctx() ctx: any): Promise<Company | null> {
    return ctx.prisma.contact.findOne({
      where: {
        id: contact.id,
      },
    }).company({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true,
    description: undefined,
  })
  async user(@TypeGraphQL.Root() contact: Contact, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return ctx.prisma.contact.findOne({
      where: {
        id: contact.id,
      },
    }).user({});
  }
}
