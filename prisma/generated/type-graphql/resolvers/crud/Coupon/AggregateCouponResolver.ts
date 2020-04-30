import * as TypeGraphQL from "type-graphql";
import { Coupon } from "../../../models/Coupon";
import { AggregateCoupon } from "../../outputs/AggregateCoupon";

@TypeGraphQL.Resolver(_of => Coupon)
export class AggregateCouponResolver {
  @TypeGraphQL.Query(_returns => AggregateCoupon, {
    nullable: false,
    description: undefined
  })
  async aggregateCoupon(): Promise<AggregateCoupon> {
    return new AggregateCoupon();
  }
}
