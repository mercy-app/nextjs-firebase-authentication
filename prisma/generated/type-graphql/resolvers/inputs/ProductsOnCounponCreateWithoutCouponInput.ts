import * as TypeGraphQL from "type-graphql";
import { ProductCreateOneWithoutProductsOnCounponInput } from "../inputs/ProductCreateOneWithoutProductsOnCounponInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductsOnCounponCreateWithoutCouponInput {
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
}
