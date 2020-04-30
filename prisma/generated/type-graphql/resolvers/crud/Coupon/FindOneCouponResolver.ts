import * as TypeGraphQL from "type-graphql";
import { FindOneCouponArgs } from "./args/FindOneCouponArgs";
import { Coupon } from "../../../models/Coupon";

@TypeGraphQL.Resolver(_of => Coupon)
export class FindOneCouponResolver {
  @TypeGraphQL.Query(_returns => Coupon, {
    nullable: true,
    description: undefined
  })
  async coupon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneCouponArgs): Promise<Coupon | null> {
    return ctx.prisma.coupon.findOne(args);
  }
}
