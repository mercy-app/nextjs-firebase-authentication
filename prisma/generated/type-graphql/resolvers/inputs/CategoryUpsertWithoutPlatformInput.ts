import * as TypeGraphQL from "type-graphql";
import { CategoryCreateWithoutPlatformInput } from "../inputs/CategoryCreateWithoutPlatformInput";
import { CategoryUpdateWithoutPlatformDataInput } from "../inputs/CategoryUpdateWithoutPlatformDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryUpsertWithoutPlatformInput {
  @TypeGraphQL.Field(_type => CategoryUpdateWithoutPlatformDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CategoryUpdateWithoutPlatformDataInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutPlatformInput, {
    nullable: false,
    description: undefined
  })
  create!: CategoryCreateWithoutPlatformInput;
}
