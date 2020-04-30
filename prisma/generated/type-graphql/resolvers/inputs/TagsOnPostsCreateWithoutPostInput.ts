import * as TypeGraphQL from "type-graphql";
import { TagCreateOneWithoutPostsInput } from "../inputs/TagCreateOneWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnPostsCreateWithoutPostInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => TagCreateOneWithoutPostsInput, {
    nullable: false,
    description: undefined
  })
  tag!: TagCreateOneWithoutPostsInput;
}
