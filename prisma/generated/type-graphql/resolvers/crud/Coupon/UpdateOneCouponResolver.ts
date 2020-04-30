import * as TypeGraphQL from "type-graphql";
import { UpdateOneCouponArgs } from "./args/UpdateOneCouponArgs";
import { Coupon } from "../../../models/Coupon";

@TypeGraphQL.Resolver(_of => Coupon)
export class UpdateOneCouponResolver {
  @TypeGraphQL.Mutation(_returns => Coupon, {
    nullable: true,
    description: undefined
  })
  async updateOneCoupon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneCouponArgs): Promise<Coupon | null> {
    return ctx.prisma.coupon.update(args);
  }
}
