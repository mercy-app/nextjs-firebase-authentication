import * as TypeGraphQL from "type-graphql";
import { ProductUpdateOneRequiredWithoutProductsOnCounponInput } from "../inputs/ProductUpdateOneRequiredWithoutProductsOnCounponInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductsOnCounponUpdateWithoutCouponDataInput {
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
}
