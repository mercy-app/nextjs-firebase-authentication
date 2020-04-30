import * as TypeGraphQL from "type-graphql";
import { FindOneCategoriesOnPostsArgs } from "./args/FindOneCategoriesOnPostsArgs";
import { CategoriesOnPosts } from "../../../models/CategoriesOnPosts";

@TypeGraphQL.Resolver(_of => CategoriesOnPosts)
export class FindOneCategoriesOnPostsResolver {
  @TypeGraphQL.Query(_returns => CategoriesOnPosts, {
    nullable: true,
    description: undefined
  })
  async categoriesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneCategoriesOnPostsArgs): Promise<CategoriesOnPosts | null> {
    return ctx.prisma.categoriesOnPosts.findOne(args);
  }
}
