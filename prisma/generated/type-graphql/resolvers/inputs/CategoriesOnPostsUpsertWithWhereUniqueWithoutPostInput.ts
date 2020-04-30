import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPostsCreateWithoutPostInput } from "../inputs/CategoriesOnPostsCreateWithoutPostInput";
import { CategoriesOnPostsUpdateWithoutPostDataInput } from "../inputs/CategoriesOnPostsUpdateWithoutPostDataInput";
import { CategoriesOnPostsWhereUniqueInput } from "../inputs/CategoriesOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnPostsUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => CategoriesOnPostsWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CategoriesOnPostsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoriesOnPostsUpdateWithoutPostDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CategoriesOnPostsUpdateWithoutPostDataInput;

  @TypeGraphQL.Field(_type => CategoriesOnPostsCreateWithoutPostInput, {
    nullable: false,
    description: undefined
  })
  create!: CategoriesOnPostsCreateWithoutPostInput;
}
