import * as TypeGraphQL from "type-graphql";
import { TagsOnProductsCreateWithoutProductInput } from "../inputs/TagsOnProductsCreateWithoutProductInput";
import { TagsOnProductsScalarWhereInput } from "../inputs/TagsOnProductsScalarWhereInput";
import { TagsOnProductsUpdateManyWithWhereNestedInput } from "../inputs/TagsOnProductsUpdateManyWithWhereNestedInput";
import { TagsOnProductsUpdateWithWhereUniqueWithoutProductInput } from "../inputs/TagsOnProductsUpdateWithWhereUniqueWithoutProductInput";
import { TagsOnProductsUpsertWithWhereUniqueWithoutProductInput } from "../inputs/TagsOnProductsUpsertWithWhereUniqueWithoutProductInput";
import { TagsOnProductsWhereUniqueInput } from "../inputs/TagsOnProductsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnProductsUpdateManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [TagsOnProductsCreateWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  create?: TagsOnProductsCreateWithoutProductInput[] | null;

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

  @TypeGraphQL.Field(_type => [TagsOnProductsUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  update?: TagsOnProductsUpdateWithWhereUniqueWithoutProductInput[] | null;

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

  @TypeGraphQL.Field(_type => [TagsOnProductsUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  upsert?: TagsOnProductsUpsertWithWhereUniqueWithoutProductInput[] | null;
}
