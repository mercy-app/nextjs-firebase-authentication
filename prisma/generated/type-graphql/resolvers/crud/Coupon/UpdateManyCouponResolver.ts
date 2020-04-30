import * as TypeGraphQL from "type-graphql";
import { UpdateManyCouponArgs } from "./args/UpdateManyCouponArgs";
import { Coupon } from "../../../models/Coupon";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Coupon)
export class UpdateManyCouponResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyCoupon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCouponArgs): Promise<BatchPayload> {
    return ctx.prisma.coupon.updateMany(args);
  }
}
