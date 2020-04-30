import * as TypeGraphQL from "type-graphql";
import { CategoryCreateOneWithoutProductsInput } from "../inputs/CategoryCreateOneWithoutProductsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnProductsCreateWithoutProductInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => CategoryCreateOneWithoutProductsInput, {
    nullable: false,
    description: undefined
  })
  category!: CategoryCreateOneWithoutProductsInput;
}
