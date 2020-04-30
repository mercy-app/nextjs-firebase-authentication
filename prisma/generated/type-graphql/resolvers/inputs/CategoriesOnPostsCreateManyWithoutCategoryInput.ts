import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPostsCreateWithoutCategoryInput } from "../inputs/CategoriesOnPostsCreateWithoutCategoryInput";
import { CategoriesOnPostsWhereUniqueInput } from "../inputs/CategoriesOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnPostsCreateManyWithoutCategoryInput {
  @TypeGraphQL.Field(_type => [CategoriesOnPostsCreateWithoutCategoryInput], {
    nullable: true,
    description: undefined
  })
  create?: CategoriesOnPostsCreateWithoutCategoryInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnPostsWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CategoriesOnPostsWhereUniqueInput[] | null;
}
