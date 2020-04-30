import * as TypeGraphQL from "type-graphql";
import { TagsOnPostsUpdateWithoutPostDataInput } from "../inputs/TagsOnPostsUpdateWithoutPostDataInput";
import { TagsOnPostsWhereUniqueInput } from "../inputs/TagsOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnPostsUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => TagsOnPostsWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: TagsOnPostsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnPostsUpdateWithoutPostDataInput, {
    nullable: false,
    description: undefined
  })
  data!: TagsOnPostsUpdateWithoutPostDataInput;
}
