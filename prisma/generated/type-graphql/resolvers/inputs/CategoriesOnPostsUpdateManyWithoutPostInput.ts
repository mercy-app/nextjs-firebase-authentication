import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPostsCreateWithoutPostInput } from "../inputs/CategoriesOnPostsCreateWithoutPostInput";
import { CategoriesOnPostsScalarWhereInput } from "../inputs/CategoriesOnPostsScalarWhereInput";
import { CategoriesOnPostsUpdateManyWithWhereNestedInput } from "../inputs/CategoriesOnPostsUpdateManyWithWhereNestedInput";
import { CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput } from "../inputs/CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput";
import { CategoriesOnPostsUpsertWithWhereUniqueWithoutPostInput } from "../inputs/CategoriesOnPostsUpsertWithWhereUniqueWithoutPostInput";
import { CategoriesOnPostsWhereUniqueInput } from "../inputs/CategoriesOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnPostsUpdateManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [CategoriesOnPostsCreateWithoutPostInput], {
    nullable: true,
    description: undefined
  })
  create?: CategoriesOnPostsCreateWithoutPostInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnPostsWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CategoriesOnPostsWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnPostsWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: CategoriesOnPostsWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnPostsWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: CategoriesOnPostsWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnPostsWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: CategoriesOnPostsWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true,
    description: undefined
  })
  update?: CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnPostsUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: CategoriesOnPostsUpdateManyWithWhereNestedInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnPostsScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: CategoriesOnPostsScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnPostsUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true,
    description: undefined
  })
  upsert?: CategoriesOnPostsUpsertWithWhereUniqueWithoutPostInput[] | null;
}
