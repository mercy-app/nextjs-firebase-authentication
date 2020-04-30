import * as TypeGraphQL from "type-graphql";
import { UpsertOneTagsOnPostsArgs } from "./args/UpsertOneTagsOnPostsArgs";
import { TagsOnPosts } from "../../../models/TagsOnPosts";

@TypeGraphQL.Resolver(_of => TagsOnPosts)
export class UpsertOneTagsOnPostsResolver {
  @TypeGraphQL.Mutation(_returns => TagsOnPosts, {
    nullable: false,
    description: undefined
  })
  async upsertOneTagsOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneTagsOnPostsArgs): Promise<TagsOnPosts> {
    return ctx.prisma.tagsOnPosts.upsert(args);
  }
}
