import * as TypeGraphQL from "type-graphql";
import { CategoryUpdateWithoutParentDataInput } from "../inputs/CategoryUpdateWithoutParentDataInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryUpdateWithWhereUniqueWithoutParentInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutParentDataInput, {
    nullable: false,
    description: undefined
  })
  data!: CategoryUpdateWithoutParentDataInput;
}
