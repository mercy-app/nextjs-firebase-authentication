import * as TypeGraphQL from "type-graphql";
import { AggregateTagsOnProductsCountArgs } from "./args/AggregateTagsOnProductsCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateTagsOnProducts {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregateTagsOnProductsCountArgs) {
    return ctx.prisma.tagsOnProducts.count(args);
  }
}
