import * as TypeGraphQL from "type-graphql";
import { AggregateTagCountArgs } from "./args/AggregateTagCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateTag {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregateTagCountArgs) {
    return ctx.prisma.tag.count(args);
  }
}
