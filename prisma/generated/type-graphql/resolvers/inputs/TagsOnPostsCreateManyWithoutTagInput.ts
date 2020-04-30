import * as TypeGraphQL from "type-graphql";
import { TagsOnPostsCreateWithoutTagInput } from "../inputs/TagsOnPostsCreateWithoutTagInput";
import { TagsOnPostsWhereUniqueInput } from "../inputs/TagsOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnPostsCreateManyWithoutTagInput {
  @TypeGraphQL.Field(_type => [TagsOnPostsCreateWithoutTagInput], {
    nullable: true,
    description: undefined
  })
  create?: TagsOnPostsCreateWithoutTagInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnPostsWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: TagsOnPostsWhereUniqueInput[] | null;
}
