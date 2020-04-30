import * as TypeGraphQL from "type-graphql";
import { UpdateOneContactArgs } from "./args/UpdateOneContactArgs";
import { Contact } from "../../../models/Contact";

@TypeGraphQL.Resolver(_of => Contact)
export class UpdateOneContactResolver {
  @TypeGraphQL.Mutation(_returns => Contact, {
    nullable: true,
    description: undefined
  })
  async updateOneContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneContactArgs): Promise<Contact | null> {
    return ctx.prisma.contact.update(args);
  }
}
