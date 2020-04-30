import * as TypeGraphQL from "type-graphql";
import { Coupon } from "../../../models/Coupon";
import { Product } from "../../../models/Product";
import { ProductsOnCounpon } from "../../../models/ProductsOnCounpon";

@TypeGraphQL.Resolver(_of => ProductsOnCounpon)
export class ProductsOnCounponRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Product, {
    nullable: false,
    description: undefined,
  })
  async product(@TypeGraphQL.Root() productsOnCounpon: ProductsOnCounpon, @TypeGraphQL.Ctx() ctx: any): Promise<Product> {
    return ctx.prisma.productsOnCounpon.findOne({
      where: {
        productId_couponId: {
          productId: productsOnCounpon.productId,
          couponId: productsOnCounpon.couponId,
        },
      },
    }).product({});
  }

  @TypeGraphQL.FieldResolver(_type => Coupon, {
    nullable: false,
    description: undefined,
  })
  async coupon(@TypeGraphQL.Root() productsOnCounpon: ProductsOnCounpon, @TypeGraphQL.Ctx() ctx: any): Promise<Coupon> {
    return ctx.prisma.productsOnCounpon.findOne({
      where: {
        productId_couponId: {
          productId: productsOnCounpon.productId,
          couponId: productsOnCounpon.couponId,
        },
      },
    }).coupon({});
  }
}
