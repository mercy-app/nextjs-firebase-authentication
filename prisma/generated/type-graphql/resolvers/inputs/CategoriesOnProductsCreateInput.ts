import * as TypeGraphQL from "type-graphql";
import { CategoryCreateOneWithoutProductsInput } from "../inputs/CategoryCreateOneWithoutProductsInput";
import { ProductCreateOneWithoutCategoriesInput } from "../inputs/ProductCreateOneWithoutCategoriesInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnProductsCreateInput {
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

  @TypeGraphQL.Field(_type => CategoryCreateOneWithoutProductsInput, {
    nullable: false,
    description: undefined
  })
  category!: CategoryCreateOneWithoutProductsInput;
}
