import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPostsCreateWithoutCategoryInput } from "../inputs/CategoriesOnPostsCreateWithoutCategoryInput";
import { CategoriesOnPostsScalarWhereInput } from "../inputs/CategoriesOnPostsScalarWhereInput";
import { CategoriesOnPostsUpdateManyWithWhereNestedInput } from "../inputs/CategoriesOnPostsUpdateManyWithWhereNestedInput";
import { CategoriesOnPostsUpdateWithWhereUniqueWithoutCategoryInput } from "../inputs/CategoriesOnPostsUpdateWithWhereUniqueWithoutCategoryInput";
import { CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput } from "../inputs/CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput";
import { CategoriesOnPostsWhereUniqueInput } from "../inputs/CategoriesOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnPostsUpdateManyWithoutCategoryInput {
  @TypeGraphQL.Field(_type => [CategoriesOnPostsCreateWithoutCategoryInput], {
    nullable: true,
    description: undefined
  })
  create?: CategoriesOnPostsCreateWithoutCategoryInput[] | null;

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

  @TypeGraphQL.Field(_type => [CategoriesOnPostsUpdateWithWhereUniqueWithoutCategoryInput], {
    nullable: true,
    description: undefined
  })
  update?: CategoriesOnPostsUpdateWithWhereUniqueWithoutCategoryInput[] | null;

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

  @TypeGraphQL.Field(_type => [CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput], {
    nullable: true,
    description: undefined
  })
  upsert?: CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput[] | null;
}
