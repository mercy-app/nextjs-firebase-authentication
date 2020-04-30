import * as TypeGraphQL from "type-graphql";
import { ProductIdCouponIdCompoundUniqueInput } from "../inputs/ProductIdCouponIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductsOnCounponWhereUniqueInput {
  @TypeGraphQL.Field(_type => ProductIdCouponIdCompoundUniqueInput, {
    nullable: true,
    description: undefined
  })
  productId_couponId?: ProductIdCouponIdCompoundUniqueInput | null;
}
