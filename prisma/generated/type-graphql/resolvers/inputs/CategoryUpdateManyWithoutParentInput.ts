import * as TypeGraphQL from "type-graphql";
import { CategoryCreateWithoutParentInput } from "../inputs/CategoryCreateWithoutParentInput";
import { CategoryScalarWhereInput } from "../inputs/CategoryScalarWhereInput";
import { CategoryUpdateManyWithWhereNestedInput } from "../inputs/CategoryUpdateManyWithWhereNestedInput";
import { CategoryUpdateWithWhereUniqueWithoutParentInput } from "../inputs/CategoryUpdateWithWhereUniqueWithoutParentInput";
import { CategoryUpsertWithWhereUniqueWithoutParentInput } from "../inputs/CategoryUpsertWithWhereUniqueWithoutParentInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryUpdateManyWithoutParentInput {
  @TypeGraphQL.Field(_type => [CategoryCreateWithoutParentInput], {
    nullable: true,
    description: undefined
  })
  create?: CategoryCreateWithoutParentInput[] | null;

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

  @TypeGraphQL.Field(_type => [CategoryUpdateWithWhereUniqueWithoutParentInput], {
    nullable: true,
    description: undefined
  })
  update?: CategoryUpdateWithWhereUniqueWithoutParentInput[] | null;

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

  @TypeGraphQL.Field(_type => [CategoryUpsertWithWhereUniqueWithoutParentInput], {
    nullable: true,
    description: undefined
  })
  upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput[] | null;
}
