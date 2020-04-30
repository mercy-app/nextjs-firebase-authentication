import * as TypeGraphQL from "type-graphql";
import { Coupon } from "../../../models/Coupon";
import { ProductsOnCounpon } from "../../../models/ProductsOnCounpon";
import { CouponProductsArgs } from "./args/CouponProductsArgs";

@TypeGraphQL.Resolver(_of => Coupon)
export class CouponRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [ProductsOnCounpon], {
    nullable: true,
    description: undefined,
  })
  async products(@TypeGraphQL.Root() coupon: Coupon, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CouponProductsArgs): Promise<ProductsOnCounpon[] | null> {
    return ctx.prisma.coupon.findOne({
      where: {
        id: coupon.id,
      },
    }).products(args);
  }
}
