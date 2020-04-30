import * as TypeGraphQL from "type-graphql";
import { AggregateCompanyCountArgs } from "./args/AggregateCompanyCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateCompany {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregateCompanyCountArgs) {
    return ctx.prisma.company.count(args);
  }
}
