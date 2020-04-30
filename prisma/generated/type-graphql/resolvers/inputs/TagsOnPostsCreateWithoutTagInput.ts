import * as TypeGraphQL from "type-graphql";
import { PostCreateOneWithoutTagsInput } from "../inputs/PostCreateOneWithoutTagsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnPostsCreateWithoutTagInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => PostCreateOneWithoutTagsInput, {
    nullable: false,
    description: undefined
  })
  post!: PostCreateOneWithoutTagsInput;
}
