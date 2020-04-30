import * as TypeGraphQL from "type-graphql";
import { CategoryUpdateWithoutPlatformDataInput } from "../inputs/CategoryUpdateWithoutPlatformDataInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryUpdateWithWhereUniqueWithoutPlatformInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutPlatformDataInput, {
    nullable: false,
    description: undefined
  })
  data!: CategoryUpdateWithoutPlatformDataInput;
}
