import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPostsUpdateWithoutPostDataInput } from "../inputs/CategoriesOnPostsUpdateWithoutPostDataInput";
import { CategoriesOnPostsWhereUniqueInput } from "../inputs/CategoriesOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => CategoriesOnPostsWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CategoriesOnPostsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoriesOnPostsUpdateWithoutPostDataInput, {
    nullable: false,
    description: undefined
  })
  data!: CategoriesOnPostsUpdateWithoutPostDataInput;
}
