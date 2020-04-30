import * as TypeGraphQL from "type-graphql";
import { AggregateCardCountArgs } from "./args/AggregateCardCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateCard {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregateCardCountArgs) {
    return ctx.prisma.card.count(args);
  }
}
