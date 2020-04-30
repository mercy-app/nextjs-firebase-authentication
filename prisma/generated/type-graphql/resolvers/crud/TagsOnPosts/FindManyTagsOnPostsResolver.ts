import * as TypeGraphQL from "type-graphql";
import { FindManyTagsOnPostsArgs } from "./args/FindManyTagsOnPostsArgs";
import { TagsOnPosts } from "../../../models/TagsOnPosts";

@TypeGraphQL.Resolver(_of => TagsOnPosts)
export class FindManyTagsOnPostsResolver {
  @TypeGraphQL.Query(_returns => [TagsOnPosts], {
    nullable: false,
    description: undefined
  })
  async tagsOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTagsOnPostsArgs): Promise<TagsOnPosts[]> {
    return ctx.prisma.tagsOnPosts.findMany(args);
  }
}
