import * as TypeGraphQL from "type-graphql";
import { PostCreateOneWithoutCategoriesInput } from "../inputs/PostCreateOneWithoutCategoriesInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnPostsCreateWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => PostCreateOneWithoutCategoriesInput, {
    nullable: false,
    description: undefined
  })
  post!: PostCreateOneWithoutCategoriesInput;
}
