import * as TypeGraphQL from "type-graphql";
import { DeleteOneCouponArgs } from "./args/DeleteOneCouponArgs";
import { Coupon } from "../../../models/Coupon";

@TypeGraphQL.Resolver(_of => Coupon)
export class DeleteOneCouponResolver {
  @TypeGraphQL.Mutation(_returns => Coupon, {
    nullable: true,
    description: undefined
  })
  async deleteOneCoupon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneCouponArgs): Promise<Coupon | null> {
    return ctx.prisma.coupon.delete(args);
  }
}
