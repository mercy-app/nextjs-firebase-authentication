import * as TypeGraphQL from "type-graphql";
import { TagsOnPostsCreateWithoutTagInput } from "../inputs/TagsOnPostsCreateWithoutTagInput";
import { TagsOnPostsUpdateWithoutTagDataInput } from "../inputs/TagsOnPostsUpdateWithoutTagDataInput";
import { TagsOnPostsWhereUniqueInput } from "../inputs/TagsOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnPostsUpsertWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => TagsOnPostsWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: TagsOnPostsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnPostsUpdateWithoutTagDataInput, {
    nullable: false,
    description: undefined
  })
  update!: TagsOnPostsUpdateWithoutTagDataInput;

  @TypeGraphQL.Field(_type => TagsOnPostsCreateWithoutTagInput, {
    nullable: false,
    description: undefined
  })
  create!: TagsOnPostsCreateWithoutTagInput;
}
