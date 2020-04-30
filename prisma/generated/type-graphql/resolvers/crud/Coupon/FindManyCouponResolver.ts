import * as TypeGraphQL from "type-graphql";
import { FindManyCouponArgs } from "./args/FindManyCouponArgs";
import { Coupon } from "../../../models/Coupon";

@TypeGraphQL.Resolver(_of => Coupon)
export class FindManyCouponResolver {
  @TypeGraphQL.Query(_returns => [Coupon], {
    nullable: false,
    description: undefined
  })
  async coupons(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCouponArgs): Promise<Coupon[]> {
    return ctx.prisma.coupon.findMany(args);
  }
}
