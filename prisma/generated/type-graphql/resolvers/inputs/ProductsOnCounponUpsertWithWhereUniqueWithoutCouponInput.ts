import * as TypeGraphQL from "type-graphql";
import { ProductsOnCounponCreateWithoutCouponInput } from "../inputs/ProductsOnCounponCreateWithoutCouponInput";
import { ProductsOnCounponUpdateWithoutCouponDataInput } from "../inputs/ProductsOnCounponUpdateWithoutCouponDataInput";
import { ProductsOnCounponWhereUniqueInput } from "../inputs/ProductsOnCounponWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductsOnCounponUpsertWithWhereUniqueWithoutCouponInput {
  @TypeGraphQL.Field(_type => ProductsOnCounponWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: ProductsOnCounponWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsOnCounponUpdateWithoutCouponDataInput, {
    nullable: false,
    description: undefined
  })
  update!: ProductsOnCounponUpdateWithoutCouponDataInput;

  @TypeGraphQL.Field(_type => ProductsOnCounponCreateWithoutCouponInput, {
    nullable: false,
    description: undefined
  })
  create!: ProductsOnCounponCreateWithoutCouponInput;
}
