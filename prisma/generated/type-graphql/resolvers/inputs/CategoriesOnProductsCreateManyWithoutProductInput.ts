import * as TypeGraphQL from "type-graphql";
import { CategoriesOnProductsCreateWithoutProductInput } from "../inputs/CategoriesOnProductsCreateWithoutProductInput";
import { CategoriesOnProductsWhereUniqueInput } from "../inputs/CategoriesOnProductsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnProductsCreateManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [CategoriesOnProductsCreateWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  create?: CategoriesOnProductsCreateWithoutProductInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnProductsWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CategoriesOnProductsWhereUniqueInput[] | null;
}
