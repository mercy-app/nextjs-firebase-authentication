import * as TypeGraphQL from "type-graphql";
import { FindManyCategoriesOnPostsArgs } from "./args/FindManyCategoriesOnPostsArgs";
import { CategoriesOnPosts } from "../../../models/CategoriesOnPosts";

@TypeGraphQL.Resolver(_of => CategoriesOnPosts)
export class FindManyCategoriesOnPostsResolver {
  @TypeGraphQL.Query(_returns => [CategoriesOnPosts], {
    nullable: false,
    description: undefined
  })
  async categoriesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCategoriesOnPostsArgs): Promise<CategoriesOnPosts[]> {
    return ctx.prisma.categoriesOnPosts.findMany(args);
  }
}
