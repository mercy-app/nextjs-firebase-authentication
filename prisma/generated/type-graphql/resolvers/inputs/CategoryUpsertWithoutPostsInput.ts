import * as TypeGraphQL from "type-graphql";
import { CategoryCreateWithoutPostsInput } from "../inputs/CategoryCreateWithoutPostsInput";
import { CategoryUpdateWithoutPostsDataInput } from "../inputs/CategoryUpdateWithoutPostsDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryUpsertWithoutPostsInput {
  @TypeGraphQL.Field(_type => CategoryUpdateWithoutPostsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CategoryUpdateWithoutPostsDataInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutPostsInput, {
    nullable: false,
    description: undefined
  })
  create!: CategoryCreateWithoutPostsInput;
}
