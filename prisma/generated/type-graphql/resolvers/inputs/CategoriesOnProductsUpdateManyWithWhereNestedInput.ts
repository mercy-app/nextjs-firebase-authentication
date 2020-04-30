import * as TypeGraphQL from "type-graphql";
import { CategoriesOnProductsScalarWhereInput } from "../inputs/CategoriesOnProductsScalarWhereInput";
import { CategoriesOnProductsUpdateManyDataInput } from "../inputs/CategoriesOnProductsUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnProductsUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => CategoriesOnProductsScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: CategoriesOnProductsScalarWhereInput;

  @TypeGraphQL.Field(_type => CategoriesOnProductsUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: CategoriesOnProductsUpdateManyDataInput;
}
