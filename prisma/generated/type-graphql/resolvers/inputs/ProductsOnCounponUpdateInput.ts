import * as TypeGraphQL from "type-graphql";
import { CouponUpdateOneRequiredWithoutProductsInput } from "../inputs/CouponUpdateOneRequiredWithoutProductsInput";
import { ProductUpdateOneRequiredWithoutProductsOnCounponInput } from "../inputs/ProductUpdateOneRequiredWithoutProductsOnCounponInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductsOnCounponUpdateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutProductsOnCounponInput, {
    nullable: true,
    description: undefined
  })
  product?: ProductUpdateOneRequiredWithoutProductsOnCounponInput | null;

  @TypeGraphQL.Field(_type => CouponUpdateOneRequiredWithoutProductsInput, {
    nullable: true,
    description: undefined
  })
  coupon?: CouponUpdateOneRequiredWithoutProductsInput | null;
}
