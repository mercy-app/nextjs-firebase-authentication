import * as TypeGraphQL from "type-graphql";
import { CategoryScalarWhereInput } from "../inputs/CategoryScalarWhereInput";
import { CategoryUpdateManyDataInput } from "../inputs/CategoryUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => CategoryScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: CategoryScalarWhereInput;

  @TypeGraphQL.Field(_type => CategoryUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: CategoryUpdateManyDataInput;
}
