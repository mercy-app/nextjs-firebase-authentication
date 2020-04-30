import * as TypeGraphQL from "type-graphql";
import { TagsOnProductsCreateWithoutTagInput } from "../inputs/TagsOnProductsCreateWithoutTagInput";
import { TagsOnProductsScalarWhereInput } from "../inputs/TagsOnProductsScalarWhereInput";
import { TagsOnProductsUpdateManyWithWhereNestedInput } from "../inputs/TagsOnProductsUpdateManyWithWhereNestedInput";
import { TagsOnProductsUpdateWithWhereUniqueWithoutTagInput } from "../inputs/TagsOnProductsUpdateWithWhereUniqueWithoutTagInput";
import { TagsOnProductsUpsertWithWhereUniqueWithoutTagInput } from "../inputs/TagsOnProductsUpsertWithWhereUniqueWithoutTagInput";
import { TagsOnProductsWhereUniqueInput } from "../inputs/TagsOnProductsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnProductsUpdateManyWithoutTagInput {
  @TypeGraphQL.Field(_type => [TagsOnProductsCreateWithoutTagInput], {
    nullable: true,
    description: undefined
  })
  create?: TagsOnProductsCreateWithoutTagInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnProductsWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: TagsOnProductsWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnProductsWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: TagsOnProductsWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnProductsWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: TagsOnProductsWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnProductsWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: TagsOnProductsWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnProductsUpdateWithWhereUniqueWithoutTagInput], {
    nullable: true,
    description: undefined
  })
  update?: TagsOnProductsUpdateWithWhereUniqueWithoutTagInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnProductsUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: TagsOnProductsUpdateManyWithWhereNestedInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnProductsScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: TagsOnProductsScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnProductsUpsertWithWhereUniqueWithoutTagInput], {
    nullable: true,
    description: undefined
  })
  upsert?: TagsOnProductsUpsertWithWhereUniqueWithoutTagInput[] | null;
}
