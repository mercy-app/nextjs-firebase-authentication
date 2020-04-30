import * as TypeGraphQL from "type-graphql";
import { CategoryUpdateOneRequiredWithoutProductsInput } from "../inputs/CategoryUpdateOneRequiredWithoutProductsInput";
import { ProductUpdateOneRequiredWithoutCategoriesInput } from "../inputs/ProductUpdateOneRequiredWithoutCategoriesInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnProductsUpdateInput {
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

  @TypeGraphQL.Field(_type => CategoryUpdateOneRequiredWithoutProductsInput, {
    nullable: true,
    description: undefined
  })
  category?: CategoryUpdateOneRequiredWithoutProductsInput | null;
}
