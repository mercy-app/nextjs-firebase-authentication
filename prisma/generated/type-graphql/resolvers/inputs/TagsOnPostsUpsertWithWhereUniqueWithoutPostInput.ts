import * as TypeGraphQL from "type-graphql";
import { TagsOnPostsCreateWithoutPostInput } from "../inputs/TagsOnPostsCreateWithoutPostInput";
import { TagsOnPostsUpdateWithoutPostDataInput } from "../inputs/TagsOnPostsUpdateWithoutPostDataInput";
import { TagsOnPostsWhereUniqueInput } from "../inputs/TagsOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnPostsUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => TagsOnPostsWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: TagsOnPostsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnPostsUpdateWithoutPostDataInput, {
    nullable: false,
    description: undefined
  })
  update!: TagsOnPostsUpdateWithoutPostDataInput;

  @TypeGraphQL.Field(_type => TagsOnPostsCreateWithoutPostInput, {
    nullable: false,
    description: undefined
  })
  create!: TagsOnPostsCreateWithoutPostInput;
}
