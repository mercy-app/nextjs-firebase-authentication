import * as TypeGraphQL from "type-graphql";
import { TagsOnPostsCreateWithoutPostInput } from "../inputs/TagsOnPostsCreateWithoutPostInput";
import { TagsOnPostsScalarWhereInput } from "../inputs/TagsOnPostsScalarWhereInput";
import { TagsOnPostsUpdateManyWithWhereNestedInput } from "../inputs/TagsOnPostsUpdateManyWithWhereNestedInput";
import { TagsOnPostsUpdateWithWhereUniqueWithoutPostInput } from "../inputs/TagsOnPostsUpdateWithWhereUniqueWithoutPostInput";
import { TagsOnPostsUpsertWithWhereUniqueWithoutPostInput } from "../inputs/TagsOnPostsUpsertWithWhereUniqueWithoutPostInput";
import { TagsOnPostsWhereUniqueInput } from "../inputs/TagsOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnPostsUpdateManyWithoutPostInput {
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

  @TypeGraphQL.Field(_type => [TagsOnPostsWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: TagsOnPostsWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnPostsWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: TagsOnPostsWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnPostsWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: TagsOnPostsWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnPostsUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true,
    description: undefined
  })
  update?: TagsOnPostsUpdateWithWhereUniqueWithoutPostInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnPostsUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: TagsOnPostsUpdateManyWithWhereNestedInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnPostsScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: TagsOnPostsScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnPostsUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true,
    description: undefined
  })
  upsert?: TagsOnPostsUpsertWithWhereUniqueWithoutPostInput[] | null;
}
