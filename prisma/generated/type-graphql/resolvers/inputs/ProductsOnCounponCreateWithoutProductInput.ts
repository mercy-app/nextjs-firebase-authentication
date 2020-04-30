import * as TypeGraphQL from "type-graphql";
import { CouponCreateOneWithoutProductsInput } from "../inputs/CouponCreateOneWithoutProductsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductsOnCounponCreateWithoutProductInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => CouponCreateOneWithoutProductsInput, {
    nullable: false,
    description: undefined
  })
  coupon!: CouponCreateOneWithoutProductsInput;
}
