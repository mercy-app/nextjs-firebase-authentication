import * as TypeGraphQL from "type-graphql";
import { TagsOnPostsCreateWithoutPostInput } from "../inputs/TagsOnPostsCreateWithoutPostInput";
import { TagsOnPostsWhereUniqueInput } from "../inputs/TagsOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnPostsCreateManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [TagsOnPostsCreateWithoutPostInput], {
    nullable: true,
    description: undefined
  })
  create?: TagsOnPostsCreateWithoutPostInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnPostsWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: TagsOnPostsWhereUniqueInput[] | null;
}
