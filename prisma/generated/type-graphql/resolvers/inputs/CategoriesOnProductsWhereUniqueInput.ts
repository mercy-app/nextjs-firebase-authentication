import * as TypeGraphQL from "type-graphql";
import { ProductIdCategoryIdCompoundUniqueInput } from "../inputs/ProductIdCategoryIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnProductsWhereUniqueInput {
  @TypeGraphQL.Field(_type => ProductIdCategoryIdCompoundUniqueInput, {
    nullable: true,
    description: undefined
  })
  productId_categoryId?: ProductIdCategoryIdCompoundUniqueInput | null;
}
