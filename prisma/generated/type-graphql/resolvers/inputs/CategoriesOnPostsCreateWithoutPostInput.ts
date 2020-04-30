import * as TypeGraphQL from "type-graphql";
import { CategoryCreateOneWithoutPostsInput } from "../inputs/CategoryCreateOneWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnPostsCreateWithoutPostInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => CategoryCreateOneWithoutPostsInput, {
    nullable: false,
    description: undefined
  })
  category!: CategoryCreateOneWithoutPostsInput;
}
