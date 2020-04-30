import * as TypeGraphQL from "type-graphql";
import { AggregateOrderItemCountArgs } from "./args/AggregateOrderItemCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateOrderItem {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregateOrderItemCountArgs) {
    return ctx.prisma.orderItem.count(args);
  }
}
