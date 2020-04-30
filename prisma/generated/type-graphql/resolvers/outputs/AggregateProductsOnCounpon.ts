import * as TypeGraphQL from "type-graphql";
import { AggregateProductsOnCounponCountArgs } from "./args/AggregateProductsOnCounponCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateProductsOnCounpon {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregateProductsOnCounponCountArgs) {
    return ctx.prisma.productsOnCounpon.count(args);
  }
}
