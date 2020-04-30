import * as TypeGraphQL from "type-graphql";
import { AggregateAddressCountArgs } from "./args/AggregateAddressCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateAddress {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregateAddressCountArgs) {
    return ctx.prisma.address.count(args);
  }
}
