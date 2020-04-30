import * as TypeGraphQL from "type-graphql";
import { CategoryCreateWithoutPlatformInput } from "../inputs/CategoryCreateWithoutPlatformInput";
import { CategoryUpdateWithoutPlatformDataInput } from "../inputs/CategoryUpdateWithoutPlatformDataInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryUpsertWithWhereUniqueWithoutPlatformInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CategoryWhereUniqueInput;

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
