import * as TypeGraphQL from "type-graphql";
import { UpdateOneCategoriesOnPostsArgs } from "./args/UpdateOneCategoriesOnPostsArgs";
import { CategoriesOnPosts } from "../../../models/CategoriesOnPosts";

@TypeGraphQL.Resolver(_of => CategoriesOnPosts)
export class UpdateOneCategoriesOnPostsResolver {
  @TypeGraphQL.Mutation(_returns => CategoriesOnPosts, {
    nullable: true,
    description: undefined
  })
  async updateOneCategoriesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneCategoriesOnPostsArgs): Promise<CategoriesOnPosts | null> {
    return ctx.prisma.categoriesOnPosts.update(args);
  }
}
