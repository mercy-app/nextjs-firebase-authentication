import * as TypeGraphQL from "type-graphql";
import { CategoriesOnProductsCreateWithoutProductInput } from "../inputs/CategoriesOnProductsCreateWithoutProductInput";
import { CategoriesOnProductsUpdateWithoutProductDataInput } from "../inputs/CategoriesOnProductsUpdateWithoutProductDataInput";
import { CategoriesOnProductsWhereUniqueInput } from "../inputs/CategoriesOnProductsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnProductsUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => CategoriesOnProductsWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CategoriesOnProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoriesOnProductsUpdateWithoutProductDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CategoriesOnProductsUpdateWithoutProductDataInput;

  @TypeGraphQL.Field(_type => CategoriesOnProductsCreateWithoutProductInput, {
    nullable: false,
    description: undefined
  })
  create!: CategoriesOnProductsCreateWithoutProductInput;
}
