import * as TypeGraphQL from "type-graphql";
import { AggregateContactCountArgs } from "./args/AggregateContactCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateContact {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregateContactCountArgs) {
    return ctx.prisma.contact.count(args);
  }
}
