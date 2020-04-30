import * as TypeGraphQL from "type-graphql";
import { TagsOnPostsCreateWithoutTagInput } from "../inputs/TagsOnPostsCreateWithoutTagInput";
import { TagsOnPostsScalarWhereInput } from "../inputs/TagsOnPostsScalarWhereInput";
import { TagsOnPostsUpdateManyWithWhereNestedInput } from "../inputs/TagsOnPostsUpdateManyWithWhereNestedInput";
import { TagsOnPostsUpdateWithWhereUniqueWithoutTagInput } from "../inputs/TagsOnPostsUpdateWithWhereUniqueWithoutTagInput";
import { TagsOnPostsUpsertWithWhereUniqueWithoutTagInput } from "../inputs/TagsOnPostsUpsertWithWhereUniqueWithoutTagInput";
import { TagsOnPostsWhereUniqueInput } from "../inputs/TagsOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnPostsUpdateManyWithoutTagInput {
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

  @TypeGraphQL.Field(_type => [TagsOnPostsUpdateWithWhereUniqueWithoutTagInput], {
    nullable: true,
    description: undefined
  })
  update?: TagsOnPostsUpdateWithWhereUniqueWithoutTagInput[] | null;

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

  @TypeGraphQL.Field(_type => [TagsOnPostsUpsertWithWhereUniqueWithoutTagInput], {
    nullable: true,
    description: undefined
  })
  upsert?: TagsOnPostsUpsertWithWhereUniqueWithoutTagInput[] | null;
}
