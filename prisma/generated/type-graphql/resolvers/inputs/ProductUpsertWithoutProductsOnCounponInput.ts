import * as TypeGraphQL from "type-graphql";
import { ProductCreateWithoutProductsOnCounponInput } from "../inputs/ProductCreateWithoutProductsOnCounponInput";
import { ProductUpdateWithoutProductsOnCounponDataInput } from "../inputs/ProductUpdateWithoutProductsOnCounponDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductUpsertWithoutProductsOnCounponInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutProductsOnCounponDataInput, {
    nullable: false,
    description: undefined
  })
  update!: ProductUpdateWithoutProductsOnCounponDataInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProductsOnCounponInput, {
    nullable: false,
    description: undefined
  })
  create!: ProductCreateWithoutProductsOnCounponInput;
}
