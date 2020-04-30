import * as TypeGraphQL from "type-graphql";
import { CategoryUpdateOneRequiredWithoutProductsInput } from "../inputs/CategoryUpdateOneRequiredWithoutProductsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnProductsUpdateWithoutProductDataInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => CategoryUpdateOneRequiredWithoutProductsInput, {
    nullable: true,
    description: undefined
  })
  category?: CategoryUpdateOneRequiredWithoutProductsInput | null;
}
