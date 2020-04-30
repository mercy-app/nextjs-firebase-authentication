import * as TypeGraphQL from "type-graphql";
import { AggregateCountryCountArgs } from "./args/AggregateCountryCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateCountry {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregateCountryCountArgs) {
    return ctx.prisma.country.count(args);
  }
}
