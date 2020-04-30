import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPostsCreateWithoutCategoryInput } from "../inputs/CategoriesOnPostsCreateWithoutCategoryInput";
import { CategoriesOnPostsUpdateWithoutCategoryDataInput } from "../inputs/CategoriesOnPostsUpdateWithoutCategoryDataInput";
import { CategoriesOnPostsWhereUniqueInput } from "../inputs/CategoriesOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => CategoriesOnPostsWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CategoriesOnPostsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoriesOnPostsUpdateWithoutCategoryDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CategoriesOnPostsUpdateWithoutCategoryDataInput;

  @TypeGraphQL.Field(_type => CategoriesOnPostsCreateWithoutCategoryInput, {
    nullable: false,
    description: undefined
  })
  create!: CategoriesOnPostsCreateWithoutCategoryInput;
}
