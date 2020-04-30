import * as TypeGraphQL from "type-graphql";
import { PostCreateOneWithoutTagsInput } from "../inputs/PostCreateOneWithoutTagsInput";
import { TagCreateOneWithoutPostsInput } from "../inputs/TagCreateOneWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnPostsCreateInput {
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

  @TypeGraphQL.Field(_type => TagCreateOneWithoutPostsInput, {
    nullable: false,
    description: undefined
  })
  tag!: TagCreateOneWithoutPostsInput;
}
