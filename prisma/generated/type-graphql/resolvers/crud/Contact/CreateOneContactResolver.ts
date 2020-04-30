import * as TypeGraphQL from "type-graphql";
import { CreateOneContactArgs } from "./args/CreateOneContactArgs";
import { Contact } from "../../../models/Contact";

@TypeGraphQL.Resolver(_of => Contact)
export class CreateOneContactResolver {
  @TypeGraphQL.Mutation(_returns => Contact, {
    nullable: false,
    description: undefined
  })
  async createOneContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneContactArgs): Promise<Contact> {
    return ctx.prisma.contact.create(args);
  }
}
