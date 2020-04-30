import * as TypeGraphQL from "type-graphql";
import { ProductUpdateOneRequiredWithoutCategoriesInput } from "../inputs/ProductUpdateOneRequiredWithoutCategoriesInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnProductsUpdateWithoutCategoryDataInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutCategoriesInput, {
    nullable: true,
    description: undefined
  })
  product?: ProductUpdateOneRequiredWithoutCategoriesInput | null;
}
