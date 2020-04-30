import * as TypeGraphQL from "type-graphql";
import { CategoriesOnProductsUpdateWithoutProductDataInput } from "../inputs/CategoriesOnProductsUpdateWithoutProductDataInput";
import { CategoriesOnProductsWhereUniqueInput } from "../inputs/CategoriesOnProductsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnProductsUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => CategoriesOnProductsWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CategoriesOnProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoriesOnProductsUpdateWithoutProductDataInput, {
    nullable: false,
    description: undefined
  })
  data!: CategoriesOnProductsUpdateWithoutProductDataInput;
}
