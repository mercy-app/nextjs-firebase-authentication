import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPostsUpdateWithoutCategoryDataInput } from "../inputs/CategoriesOnPostsUpdateWithoutCategoryDataInput";
import { CategoriesOnPostsWhereUniqueInput } from "../inputs/CategoriesOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnPostsUpdateWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => CategoriesOnPostsWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CategoriesOnPostsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoriesOnPostsUpdateWithoutCategoryDataInput, {
    nullable: false,
    description: undefined
  })
  data!: CategoriesOnPostsUpdateWithoutCategoryDataInput;
}
