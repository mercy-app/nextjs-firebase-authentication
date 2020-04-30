import * as TypeGraphQL from "type-graphql";
import { Post } from "../../../models/Post";
import { Tag } from "../../../models/Tag";
import { TagsOnPosts } from "../../../models/TagsOnPosts";

@TypeGraphQL.Resolver(_of => TagsOnPosts)
export class TagsOnPostsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: false,
    description: undefined,
  })
  async post(@TypeGraphQL.Root() tagsOnPosts: TagsOnPosts, @TypeGraphQL.Ctx() ctx: any): Promise<Post> {
    return ctx.prisma.tagsOnPosts.findOne({
      where: {
        postId_tagId: {
          postId: tagsOnPosts.postId,
          tagId: tagsOnPosts.tagId,
        },
      },
    }).post({});
  }

  @TypeGraphQL.FieldResolver(_type => Tag, {
    nullable: false,
    description: undefined,
  })
  async tag(@TypeGraphQL.Root() tagsOnPosts: TagsOnPosts, @TypeGraphQL.Ctx() ctx: any): Promise<Tag> {
    return ctx.prisma.tagsOnPosts.findOne({
      where: {
        postId_tagId: {
          postId: tagsOnPosts.postId,
          tagId: tagsOnPosts.tagId,
        },
      },
    }).tag({});
  }
}
