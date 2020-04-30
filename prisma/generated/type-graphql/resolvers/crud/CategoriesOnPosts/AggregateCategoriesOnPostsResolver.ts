import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPosts } from "../../../models/CategoriesOnPosts";
import { AggregateCategoriesOnPosts } from "../../outputs/AggregateCategoriesOnPosts";

@TypeGraphQL.Resolver(_of => CategoriesOnPosts)
export class AggregateCategoriesOnPostsResolver {
  @TypeGraphQL.Query(_returns => AggregateCategoriesOnPosts, {
    nullable: false,
    description: undefined
  })
  async aggregateCategoriesOnPosts(): Promise<AggregateCategoriesOnPosts> {
    return new AggregateCategoriesOnPosts();
  }
}
