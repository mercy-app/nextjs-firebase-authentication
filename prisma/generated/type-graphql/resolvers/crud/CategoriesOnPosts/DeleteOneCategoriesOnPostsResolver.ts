import * as TypeGraphQL from "type-graphql";
import { DeleteOneCategoriesOnPostsArgs } from "./args/DeleteOneCategoriesOnPostsArgs";
import { CategoriesOnPosts } from "../../../models/CategoriesOnPosts";

@TypeGraphQL.Resolver(_of => CategoriesOnPosts)
export class DeleteOneCategoriesOnPostsResolver {
  @TypeGraphQL.Mutation(_returns => CategoriesOnPosts, {
    nullable: true,
    description: undefined
  })
  async deleteOneCategoriesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneCategoriesOnPostsArgs): Promise<CategoriesOnPosts | null> {
    return ctx.prisma.categoriesOnPosts.delete(args);
  }
}
