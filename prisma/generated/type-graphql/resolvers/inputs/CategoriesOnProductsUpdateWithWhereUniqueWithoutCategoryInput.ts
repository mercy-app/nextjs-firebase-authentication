import * as TypeGraphQL from "type-graphql";
import { CategoriesOnProductsUpdateWithoutCategoryDataInput } from "../inputs/CategoriesOnProductsUpdateWithoutCategoryDataInput";
import { CategoriesOnProductsWhereUniqueInput } from "../inputs/CategoriesOnProductsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnProductsUpdateWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => CategoriesOnProductsWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CategoriesOnProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoriesOnProductsUpdateWithoutCategoryDataInput, {
    nullable: false,
    description: undefined
  })
  data!: CategoriesOnProductsUpdateWithoutCategoryDataInput;
}
