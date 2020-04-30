import * as TypeGraphQL from "type-graphql";
import { CategoryCreateWithoutChildrenInput } from "../inputs/CategoryCreateWithoutChildrenInput";
import { CategoryUpdateWithoutChildrenDataInput } from "../inputs/CategoryUpdateWithoutChildrenDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryUpsertWithoutChildrenInput {
  @TypeGraphQL.Field(_type => CategoryUpdateWithoutChildrenDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CategoryUpdateWithoutChildrenDataInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutChildrenInput, {
    nullable: false,
    description: undefined
  })
  create!: CategoryCreateWithoutChildrenInput;
}
