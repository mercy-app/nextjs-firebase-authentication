import * as TypeGraphQL from "type-graphql";
import { TagCreateWithoutPostsInput } from "../inputs/TagCreateWithoutPostsInput";
import { TagUpdateWithoutPostsDataInput } from "../inputs/TagUpdateWithoutPostsDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagUpsertWithoutPostsInput {
  @TypeGraphQL.Field(_type => TagUpdateWithoutPostsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: TagUpdateWithoutPostsDataInput;

  @TypeGraphQL.Field(_type => TagCreateWithoutPostsInput, {
    nullable: false,
    description: undefined
  })
  create!: TagCreateWithoutPostsInput;
}
