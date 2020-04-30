import * as TypeGraphQL from "type-graphql";
import { CreateOneCouponArgs } from "./args/CreateOneCouponArgs";
import { Coupon } from "../../../models/Coupon";

@TypeGraphQL.Resolver(_of => Coupon)
export class CreateOneCouponResolver {
  @TypeGraphQL.Mutation(_returns => Coupon, {
    nullable: false,
    description: undefined
  })
  async createOneCoupon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneCouponArgs): Promise<Coupon> {
    return ctx.prisma.coupon.create(args);
  }
}
