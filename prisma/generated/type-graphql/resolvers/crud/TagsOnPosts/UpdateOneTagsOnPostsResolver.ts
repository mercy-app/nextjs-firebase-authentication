import * as TypeGraphQL from "type-graphql";
import { UpdateOneTagsOnPostsArgs } from "./args/UpdateOneTagsOnPostsArgs";
import { TagsOnPosts } from "../../../models/TagsOnPosts";

@TypeGraphQL.Resolver(_of => TagsOnPosts)
export class UpdateOneTagsOnPostsResolver {
  @TypeGraphQL.Mutation(_returns => TagsOnPosts, {
    nullable: true,
    description: undefined
  })
  async updateOneTagsOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneTagsOnPostsArgs): Promise<TagsOnPosts | null> {
    return ctx.prisma.tagsOnPosts.update(args);
  }
}
