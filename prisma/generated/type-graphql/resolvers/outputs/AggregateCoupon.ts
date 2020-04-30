import * as TypeGraphQL from "type-graphql";
import { AggregateCouponCountArgs } from "./args/AggregateCouponCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateCoupon {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregateCouponCountArgs) {
    return ctx.prisma.coupon.count(args);
  }
}
