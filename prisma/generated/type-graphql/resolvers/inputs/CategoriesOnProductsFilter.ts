import * as TypeGraphQL from "type-graphql";
import { CategoriesOnProductsWhereInput } from "../inputs/CategoriesOnProductsWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnProductsFilter {
  @TypeGraphQL.Field(_type => CategoriesOnProductsWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: CategoriesOnProductsWhereInput | null;

  @TypeGraphQL.Field(_type => CategoriesOnProductsWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: CategoriesOnProductsWhereInput | null;

  @TypeGraphQL.Field(_type => CategoriesOnProductsWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: CategoriesOnProductsWhereInput | null;
}
