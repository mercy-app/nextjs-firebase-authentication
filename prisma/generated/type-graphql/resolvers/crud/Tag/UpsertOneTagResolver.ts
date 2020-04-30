import * as TypeGraphQL from "type-graphql";
import { UpsertOneTagArgs } from "./args/UpsertOneTagArgs";
import { Tag } from "../../../models/Tag";

@TypeGraphQL.Resolver(_of => Tag)
export class UpsertOneTagResolver {
  @TypeGraphQL.Mutation(_returns => Tag, {
    nullable: false,
    description: undefined
  })
  async upsertOneTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneTagArgs): Promise<Tag> {
    return ctx.prisma.tag.upsert(args);
  }
}
