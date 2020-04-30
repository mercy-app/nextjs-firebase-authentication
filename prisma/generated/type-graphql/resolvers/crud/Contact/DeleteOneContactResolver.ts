import * as TypeGraphQL from "type-graphql";
import { DeleteOneContactArgs } from "./args/DeleteOneContactArgs";
import { Contact } from "../../../models/Contact";

@TypeGraphQL.Resolver(_of => Contact)
export class DeleteOneContactResolver {
  @TypeGraphQL.Mutation(_returns => Contact, {
    nullable: true,
    description: undefined
  })
  async deleteOneContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneContactArgs): Promise<Contact | null> {
    return ctx.prisma.contact.delete(args);
  }
}
