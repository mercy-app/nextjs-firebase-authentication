import * as TypeGraphQL from "type-graphql";
import { DeleteManyTagsOnPostsArgs } from "./args/DeleteManyTagsOnPostsArgs";
import { TagsOnPosts } from "../../../models/TagsOnPosts";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => TagsOnPosts)
export class DeleteManyTagsOnPostsResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyTagsOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTagsOnPostsArgs): Promise<BatchPayload> {
    return ctx.prisma.tagsOnPosts.deleteMany(args);
  }
}
