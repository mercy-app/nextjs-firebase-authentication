import * as TypeGraphQL from "type-graphql";
import { AggregateProductCountArgs } from "./args/AggregateProductCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateProduct {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregateProductCountArgs) {
    return ctx.prisma.product.count(args);
  }
}
