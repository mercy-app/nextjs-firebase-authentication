import * as TypeGraphQL from "type-graphql";
import { UpsertOneCouponArgs } from "./args/UpsertOneCouponArgs";
import { Coupon } from "../../../models/Coupon";

@TypeGraphQL.Resolver(_of => Coupon)
export class UpsertOneCouponResolver {
  @TypeGraphQL.Mutation(_returns => Coupon, {
    nullable: false,
    description: undefined
  })
  async upsertOneCoupon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneCouponArgs): Promise<Coupon> {
    return ctx.prisma.coupon.upsert(args);
  }
}
