import * as TypeGraphQL from "type-graphql";
import { DeleteManyCouponArgs } from "./args/DeleteManyCouponArgs";
import { Coupon } from "../../../models/Coupon";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Coupon)
export class DeleteManyCouponResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyCoupon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCouponArgs): Promise<BatchPayload> {
    return ctx.prisma.coupon.deleteMany(args);
  }
}
