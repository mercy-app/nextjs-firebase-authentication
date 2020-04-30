import * as TypeGraphQL from "type-graphql";
import { UpdateManyTagsOnPostsArgs } from "./args/UpdateManyTagsOnPostsArgs";
import { TagsOnPosts } from "../../../models/TagsOnPosts";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => TagsOnPosts)
export class UpdateManyTagsOnPostsResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyTagsOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTagsOnPostsArgs): Promise<BatchPayload> {
    return ctx.prisma.tagsOnPosts.updateMany(args);
  }
}
