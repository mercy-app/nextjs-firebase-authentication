import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPostsScalarWhereInput } from "../inputs/CategoriesOnPostsScalarWhereInput";
import { CategoriesOnPostsUpdateManyDataInput } from "../inputs/CategoriesOnPostsUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnPostsUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => CategoriesOnPostsScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: CategoriesOnPostsScalarWhereInput;

  @TypeGraphQL.Field(_type => CategoriesOnPostsUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: CategoriesOnPostsUpdateManyDataInput;
}
