import * as TypeGraphQL from "type-graphql";
import { CouponUpdateOneRequiredWithoutProductsInput } from "../inputs/CouponUpdateOneRequiredWithoutProductsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductsOnCounponUpdateWithoutProductDataInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => CouponUpdateOneRequiredWithoutProductsInput, {
    nullable: true,
    description: undefined
  })
  coupon?: CouponUpdateOneRequiredWithoutProductsInput | null;
}
