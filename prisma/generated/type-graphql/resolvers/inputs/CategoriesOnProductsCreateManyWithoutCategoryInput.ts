import * as TypeGraphQL from "type-graphql";
import { CategoriesOnProductsCreateWithoutCategoryInput } from "../inputs/CategoriesOnProductsCreateWithoutCategoryInput";
import { CategoriesOnProductsWhereUniqueInput } from "../inputs/CategoriesOnProductsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnProductsCreateManyWithoutCategoryInput {
  @TypeGraphQL.Field(_type => [CategoriesOnProductsCreateWithoutCategoryInput], {
    nullable: true,
    description: undefined
  })
  create?: CategoriesOnProductsCreateWithoutCategoryInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnProductsWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CategoriesOnProductsWhereUniqueInput[] | null;
}
