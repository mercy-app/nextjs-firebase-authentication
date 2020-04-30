import * as TypeGraphQL from "type-graphql";
import { UpdateManyCategoriesOnPostsArgs } from "./args/UpdateManyCategoriesOnPostsArgs";
import { CategoriesOnPosts } from "../../../models/CategoriesOnPosts";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => CategoriesOnPosts)
export class UpdateManyCategoriesOnPostsResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyCategoriesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCategoriesOnPostsArgs): Promise<BatchPayload> {
    return ctx.prisma.categoriesOnPosts.updateMany(args);
  }
}
