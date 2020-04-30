import * as TypeGraphQL from "type-graphql";
import { AggregateOrderCountArgs } from "./args/AggregateOrderCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateOrder {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregateOrderCountArgs) {
    return ctx.prisma.order.count(args);
  }
}
