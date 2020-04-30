import * as TypeGraphQL from "type-graphql";
import { PostCreateWithoutCategoriesInput } from "../inputs/PostCreateWithoutCategoriesInput";
import { PostUpdateWithoutCategoriesDataInput } from "../inputs/PostUpdateWithoutCategoriesDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpsertWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutCategoriesDataInput, {
    nullable: false,
    description: undefined
  })
  update!: PostUpdateWithoutCategoriesDataInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutCategoriesInput, {
    nullable: false,
    description: undefined
  })
  create!: PostCreateWithoutCategoriesInput;
}
