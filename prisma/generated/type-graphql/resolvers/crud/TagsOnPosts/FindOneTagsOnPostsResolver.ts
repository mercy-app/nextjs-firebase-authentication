import * as TypeGraphQL from "type-graphql";
import { FindOneTagsOnPostsArgs } from "./args/FindOneTagsOnPostsArgs";
import { TagsOnPosts } from "../../../models/TagsOnPosts";

@TypeGraphQL.Resolver(_of => TagsOnPosts)
export class FindOneTagsOnPostsResolver {
  @TypeGraphQL.Query(_returns => TagsOnPosts, {
    nullable: true,
    description: undefined
  })
  async tagsOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneTagsOnPostsArgs): Promise<TagsOnPosts | null> {
    return ctx.prisma.tagsOnPosts.findOne(args);
  }
}
