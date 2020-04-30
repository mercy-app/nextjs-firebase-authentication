import * as TypeGraphQL from "type-graphql";
import { CategoryCreateWithoutProductsInput } from "../inputs/CategoryCreateWithoutProductsInput";
import { CategoryUpdateWithoutProductsDataInput } from "../inputs/CategoryUpdateWithoutProductsDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryUpsertWithoutProductsInput {
  @TypeGraphQL.Field(_type => CategoryUpdateWithoutProductsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CategoryUpdateWithoutProductsDataInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutProductsInput, {
    nullable: false,
    description: undefined
  })
  create!: CategoryCreateWithoutProductsInput;
}
