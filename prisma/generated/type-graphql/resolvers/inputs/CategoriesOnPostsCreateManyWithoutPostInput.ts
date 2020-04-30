import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPostsCreateWithoutPostInput } from "../inputs/CategoriesOnPostsCreateWithoutPostInput";
import { CategoriesOnPostsWhereUniqueInput } from "../inputs/CategoriesOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnPostsCreateManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [CategoriesOnPostsCreateWithoutPostInput], {
    nullable: true,
    description: undefined
  })
  create?: CategoriesOnPostsCreateWithoutPostInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnPostsWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CategoriesOnPostsWhereUniqueInput[] | null;
}
