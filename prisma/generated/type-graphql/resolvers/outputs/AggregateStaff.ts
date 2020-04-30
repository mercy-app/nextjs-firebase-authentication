import * as TypeGraphQL from "type-graphql";
import { AggregateStaffCountArgs } from "./args/AggregateStaffCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateStaff {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregateStaffCountArgs) {
    return ctx.prisma.staff.count(args);
  }
}
