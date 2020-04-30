import * as TypeGraphQL from "type-graphql";
import { CategoryCreateOneWithoutPostsInput } from "../inputs/CategoryCreateOneWithoutPostsInput";
import { PostCreateOneWithoutCategoriesInput } from "../inputs/PostCreateOneWithoutCategoriesInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnPostsCreateInput {
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

  @TypeGraphQL.Field(_type => CategoryCreateOneWithoutPostsInput, {
    nullable: false,
    description: undefined
  })
  category!: CategoryCreateOneWithoutPostsInput;
}
