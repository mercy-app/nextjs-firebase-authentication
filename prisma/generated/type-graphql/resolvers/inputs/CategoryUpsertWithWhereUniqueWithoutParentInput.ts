import * as TypeGraphQL from "type-graphql";
import { CategoryCreateWithoutParentInput } from "../inputs/CategoryCreateWithoutParentInput";
import { CategoryUpdateWithoutParentDataInput } from "../inputs/CategoryUpdateWithoutParentDataInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryUpsertWithWhereUniqueWithoutParentInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutParentDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CategoryUpdateWithoutParentDataInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutParentInput, {
    nullable: false,
    description: undefined
  })
  create!: CategoryCreateWithoutParentInput;
}
