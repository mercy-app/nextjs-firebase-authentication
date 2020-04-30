import * as TypeGraphQL from "type-graphql";
import { DeleteOneTagsOnPostsArgs } from "./args/DeleteOneTagsOnPostsArgs";
import { TagsOnPosts } from "../../../models/TagsOnPosts";

@TypeGraphQL.Resolver(_of => TagsOnPosts)
export class DeleteOneTagsOnPostsResolver {
  @TypeGraphQL.Mutation(_returns => TagsOnPosts, {
    nullable: true,
    description: undefined
  })
  async deleteOneTagsOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneTagsOnPostsArgs): Promise<TagsOnPosts | null> {
    return ctx.prisma.tagsOnPosts.delete(args);
  }
}
