import * as TypeGraphQL from "type-graphql";
import { CreateOneTagsOnPostsArgs } from "./args/CreateOneTagsOnPostsArgs";
import { TagsOnPosts } from "../../../models/TagsOnPosts";

@TypeGraphQL.Resolver(_of => TagsOnPosts)
export class CreateOneTagsOnPostsResolver {
  @TypeGraphQL.Mutation(_returns => TagsOnPosts, {
    nullable: false,
    description: undefined
  })
  async createOneTagsOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneTagsOnPostsArgs): Promise<TagsOnPosts> {
    return ctx.prisma.tagsOnPosts.create(args);
  }
}
