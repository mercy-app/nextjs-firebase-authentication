import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPosts } from "../../../models/CategoriesOnPosts";
import { Category } from "../../../models/Category";
import { Post } from "../../../models/Post";

@TypeGraphQL.Resolver(_of => CategoriesOnPosts)
export class CategoriesOnPostsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: false,
    description: undefined,
  })
  async post(@TypeGraphQL.Root() categoriesOnPosts: CategoriesOnPosts, @TypeGraphQL.Ctx() ctx: any): Promise<Post> {
    return ctx.prisma.categoriesOnPosts.findOne({
      where: {
        postId_categoryId: {
          postId: categoriesOnPosts.postId,
          categoryId: categoriesOnPosts.categoryId,
        },
      },
    }).post({});
  }

  @TypeGraphQL.FieldResolver(_type => Category, {
    nullable: false,
    description: undefined,
  })
  async category(@TypeGraphQL.Root() categoriesOnPosts: CategoriesOnPosts, @TypeGraphQL.Ctx() ctx: any): Promise<Category> {
    return ctx.prisma.categoriesOnPosts.findOne({
      where: {
        postId_categoryId: {
          postId: categoriesOnPosts.postId,
          categoryId: categoriesOnPosts.categoryId,
        },
      },
    }).category({});
  }
}
