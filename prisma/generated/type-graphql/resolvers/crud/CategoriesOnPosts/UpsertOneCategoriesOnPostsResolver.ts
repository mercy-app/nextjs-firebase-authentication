import * as TypeGraphQL from "type-graphql";
import { UpsertOneCategoriesOnPostsArgs } from "./args/UpsertOneCategoriesOnPostsArgs";
import { CategoriesOnPosts } from "../../../models/CategoriesOnPosts";

@TypeGraphQL.Resolver(_of => CategoriesOnPosts)
export class UpsertOneCategoriesOnPostsResolver {
  @TypeGraphQL.Mutation(_returns => CategoriesOnPosts, {
    nullable: false,
    description: undefined
  })
  async upsertOneCategoriesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneCategoriesOnPostsArgs): Promise<CategoriesOnPosts> {
    return ctx.prisma.categoriesOnPosts.upsert(args);
  }
}
