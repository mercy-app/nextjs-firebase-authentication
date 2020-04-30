import * as TypeGraphQL from "type-graphql";
import { CouponCreateOneWithoutProductsInput } from "../inputs/CouponCreateOneWithoutProductsInput";
import { ProductCreateOneWithoutProductsOnCounponInput } from "../inputs/ProductCreateOneWithoutProductsOnCounponInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductsOnCounponCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => ProductCreateOneWithoutProductsOnCounponInput, {
    nullable: false,
    description: undefined
  })
  product!: ProductCreateOneWithoutProductsOnCounponInput;

  @TypeGraphQL.Field(_type => CouponCreateOneWithoutProductsInput, {
    nullable: false,
    description: undefined
  })
  coupon!: CouponCreateOneWithoutProductsInput;
}
