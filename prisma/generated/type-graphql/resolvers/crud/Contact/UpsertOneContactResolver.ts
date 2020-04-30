import * as TypeGraphQL from "type-graphql";
import { UpsertOneContactArgs } from "./args/UpsertOneContactArgs";
import { Contact } from "../../../models/Contact";

@TypeGraphQL.Resolver(_of => Contact)
export class UpsertOneContactResolver {
  @TypeGraphQL.Mutation(_returns => Contact, {
    nullable: false,
    description: undefined
  })
  async upsertOneContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneContactArgs): Promise<Contact> {
    return ctx.prisma.contact.upsert(args);
  }
}
