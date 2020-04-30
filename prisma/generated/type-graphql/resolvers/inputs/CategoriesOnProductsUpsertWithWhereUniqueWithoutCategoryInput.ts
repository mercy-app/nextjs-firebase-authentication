import * as TypeGraphQL from "type-graphql";
import { CategoriesOnProductsCreateWithoutCategoryInput } from "../inputs/CategoriesOnProductsCreateWithoutCategoryInput";
import { CategoriesOnProductsUpdateWithoutCategoryDataInput } from "../inputs/CategoriesOnProductsUpdateWithoutCategoryDataInput";
import { CategoriesOnProductsWhereUniqueInput } from "../inputs/CategoriesOnProductsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnProductsUpsertWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => CategoriesOnProductsWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CategoriesOnProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoriesOnProductsUpdateWithoutCategoryDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CategoriesOnProductsUpdateWithoutCategoryDataInput;

  @TypeGraphQL.Field(_type => CategoriesOnProductsCreateWithoutCategoryInput, {
    nullable: false,
    description: undefined
  })
  create!: CategoriesOnProductsCreateWithoutCategoryInput;
}
