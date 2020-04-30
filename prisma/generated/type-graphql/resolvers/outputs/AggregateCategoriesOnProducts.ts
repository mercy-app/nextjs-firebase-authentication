import * as TypeGraphQL from "type-graphql";
import { AggregateCategoriesOnProductsCountArgs } from "./args/AggregateCategoriesOnProductsCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateCategoriesOnProducts {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregateCategoriesOnProductsCountArgs) {
    return ctx.prisma.categoriesOnProducts.count(args);
  }
}
