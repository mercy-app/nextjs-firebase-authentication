import * as TypeGraphQL from "type-graphql";
import { CategoriesOnProductsCreateWithoutCategoryInput } from "../inputs/CategoriesOnProductsCreateWithoutCategoryInput";
import { CategoriesOnProductsScalarWhereInput } from "../inputs/CategoriesOnProductsScalarWhereInput";
import { CategoriesOnProductsUpdateManyWithWhereNestedInput } from "../inputs/CategoriesOnProductsUpdateManyWithWhereNestedInput";
import { CategoriesOnProductsUpdateWithWhereUniqueWithoutCategoryInput } from "../inputs/CategoriesOnProductsUpdateWithWhereUniqueWithoutCategoryInput";
import { CategoriesOnProductsUpsertWithWhereUniqueWithoutCategoryInput } from "../inputs/CategoriesOnProductsUpsertWithWhereUniqueWithoutCategoryInput";
import { CategoriesOnProductsWhereUniqueInput } from "../inputs/CategoriesOnProductsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnProductsUpdateManyWithoutCategoryInput {
  @TypeGraphQL.Field(_type => [CategoriesOnProductsCreateWithoutCategoryInput], {
    nullable: true,
    description: undefined
  })
  create?: CategoriesOnProductsCreateWithoutCategoryInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnProductsWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CategoriesOnProductsWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnProductsWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: CategoriesOnProductsWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnProductsWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: CategoriesOnProductsWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnProductsWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: CategoriesOnProductsWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnProductsUpdateWithWhereUniqueWithoutCategoryInput], {
    nullable: true,
    description: undefined
  })
  update?: CategoriesOnProductsUpdateWithWhereUniqueWithoutCategoryInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnProductsUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: CategoriesOnProductsUpdateManyWithWhereNestedInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnProductsScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: CategoriesOnProductsScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnProductsUpsertWithWhereUniqueWithoutCategoryInput], {
    nullable: true,
    description: undefined
  })
  upsert?: CategoriesOnProductsUpsertWithWhereUniqueWithoutCategoryInput[] | null;
}
