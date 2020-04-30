import * as TypeGraphQL from "type-graphql";
import { DeleteManyCategoriesOnPostsArgs } from "./args/DeleteManyCategoriesOnPostsArgs";
import { CategoriesOnPosts } from "../../../models/CategoriesOnPosts";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => CategoriesOnPosts)
export class DeleteManyCategoriesOnPostsResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyCategoriesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCategoriesOnPostsArgs): Promise<BatchPayload> {
    return ctx.prisma.categoriesOnPosts.deleteMany(args);
  }
}
