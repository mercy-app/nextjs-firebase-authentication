import * as TypeGraphQL from "type-graphql";
import { PostCreateWithoutTagsInput } from "../inputs/PostCreateWithoutTagsInput";
import { PostUpdateWithoutTagsDataInput } from "../inputs/PostUpdateWithoutTagsDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpsertWithoutTagsInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutTagsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: PostUpdateWithoutTagsDataInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutTagsInput, {
    nullable: false,
    description: undefined
  })
  create!: PostCreateWithoutTagsInput;
}
