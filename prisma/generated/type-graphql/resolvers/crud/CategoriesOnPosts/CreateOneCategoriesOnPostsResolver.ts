import * as TypeGraphQL from "type-graphql";
import { CreateOneCategoriesOnPostsArgs } from "./args/CreateOneCategoriesOnPostsArgs";
import { CategoriesOnPosts } from "../../../models/CategoriesOnPosts";

@TypeGraphQL.Resolver(_of => CategoriesOnPosts)
export class CreateOneCategoriesOnPostsResolver {
  @TypeGraphQL.Mutation(_returns => CategoriesOnPosts, {
    nullable: false,
    description: undefined
  })
  async createOneCategoriesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneCategoriesOnPostsArgs): Promise<CategoriesOnPosts> {
    return ctx.prisma.categoriesOnPosts.create(args);
  }
}
