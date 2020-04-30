import * as TypeGraphQL from "type-graphql";
import { CategoryCreateWithoutPlatformInput } from "../inputs/CategoryCreateWithoutPlatformInput";
import { CategoryScalarWhereInput } from "../inputs/CategoryScalarWhereInput";
import { CategoryUpdateManyWithWhereNestedInput } from "../inputs/CategoryUpdateManyWithWhereNestedInput";
import { CategoryUpdateWithWhereUniqueWithoutPlatformInput } from "../inputs/CategoryUpdateWithWhereUniqueWithoutPlatformInput";
import { CategoryUpsertWithWhereUniqueWithoutPlatformInput } from "../inputs/CategoryUpsertWithWhereUniqueWithoutPlatformInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryUpdateManyWithoutPlatformInput {
  @TypeGraphQL.Field(_type => [CategoryCreateWithoutPlatformInput], {
    nullable: true,
    description: undefined
  })
  create?: CategoryCreateWithoutPlatformInput[] | null;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CategoryWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: CategoryWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: CategoryWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: CategoryWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [CategoryUpdateWithWhereUniqueWithoutPlatformInput], {
    nullable: true,
    description: undefined
  })
  update?: CategoryUpdateWithWhereUniqueWithoutPlatformInput[] | null;

  @TypeGraphQL.Field(_type => [CategoryUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: CategoryUpdateManyWithWhereNestedInput[] | null;

  @TypeGraphQL.Field(_type => [CategoryScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: CategoryScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CategoryUpsertWithWhereUniqueWithoutPlatformInput], {
    nullable: true,
    description: undefined
  })
  upsert?: CategoryUpsertWithWhereUniqueWithoutPlatformInput[] | null;
}
