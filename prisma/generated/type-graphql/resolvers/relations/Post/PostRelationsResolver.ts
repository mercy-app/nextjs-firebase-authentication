import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPosts } from "../../../models/CategoriesOnPosts";
import { Post } from "../../../models/Post";
import { TagsOnPosts } from "../../../models/TagsOnPosts";
import { User } from "../../../models/User";
import { PostCategoriesArgs } from "./args/PostCategoriesArgs";
import { PostTagsArgs } from "./args/PostTagsArgs";

@TypeGraphQL.Resolver(_of => Post)
export class PostRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true,
    description: undefined,
  })
  async author(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return ctx.prisma.post.findOne({
      where: {
        id: post.id,
      },
    }).author({});
  }

  @TypeGraphQL.FieldResolver(_type => [CategoriesOnPosts], {
    nullable: true,
    description: undefined,
  })
  async categories(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostCategoriesArgs): Promise<CategoriesOnPosts[] | null> {
    return ctx.prisma.post.findOne({
      where: {
        id: post.id,
      },
    }).categories(args);
  }

  @TypeGraphQL.FieldResolver(_type => [TagsOnPosts], {
    nullable: true,
    description: undefined,
  })
  async tags(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostTagsArgs): Promise<TagsOnPosts[] | null> {
    return ctx.prisma.post.findOne({
      where: {
        id: post.id,
      },
    }).tags(args);
  }
}
