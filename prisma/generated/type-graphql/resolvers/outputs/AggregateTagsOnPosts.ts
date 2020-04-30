import * as TypeGraphQL from "type-graphql";
import { AggregateTagsOnPostsCountArgs } from "./args/AggregateTagsOnPostsCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateTagsOnPosts {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregateTagsOnPostsCountArgs) {
    return ctx.prisma.tagsOnPosts.count(args);
  }
}
