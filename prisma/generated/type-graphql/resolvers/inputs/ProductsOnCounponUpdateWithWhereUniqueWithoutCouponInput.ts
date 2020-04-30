import * as TypeGraphQL from "type-graphql";
import { ProductsOnCounponUpdateWithoutCouponDataInput } from "../inputs/ProductsOnCounponUpdateWithoutCouponDataInput";
import { ProductsOnCounponWhereUniqueInput } from "../inputs/ProductsOnCounponWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductsOnCounponUpdateWithWhereUniqueWithoutCouponInput {
  @TypeGraphQL.Field(_type => ProductsOnCounponWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: ProductsOnCounponWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsOnCounponUpdateWithoutCouponDataInput, {
    nullable: false,
    description: undefined
  })
  data!: ProductsOnCounponUpdateWithoutCouponDataInput;
}
