import * as TypeGraphQL from "type-graphql";
import { ProductCreateOneWithoutCategoriesInput } from "../inputs/ProductCreateOneWithoutCategoriesInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnProductsCreateWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => ProductCreateOneWithoutCategoriesInput, {
    nullable: false,
    description: undefined
  })
  product!: ProductCreateOneWithoutCategoriesInput;
}
