import * as TypeGraphQL from "type-graphql";
import { TagsOnPostsUpdateWithoutTagDataInput } from "../inputs/TagsOnPostsUpdateWithoutTagDataInput";
import { TagsOnPostsWhereUniqueInput } from "../inputs/TagsOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnPostsUpdateWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => TagsOnPostsWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: TagsOnPostsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnPostsUpdateWithoutTagDataInput, {
    nullable: false,
    description: undefined
  })
  data!: TagsOnPostsUpdateWithoutTagDataInput;
}
