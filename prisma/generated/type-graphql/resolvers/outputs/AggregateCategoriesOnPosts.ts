import * as TypeGraphQL from "type-graphql";
import { AggregateCategoriesOnPostsCountArgs } from "./args/AggregateCategoriesOnPostsCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateCategoriesOnPosts {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregateCategoriesOnPostsCountArgs) {
    return ctx.prisma.categoriesOnPosts.count(args);
  }
}
