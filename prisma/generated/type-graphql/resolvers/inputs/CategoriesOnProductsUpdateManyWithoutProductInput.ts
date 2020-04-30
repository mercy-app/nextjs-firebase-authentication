import * as TypeGraphQL from "type-graphql";
import { CategoriesOnProductsCreateWithoutProductInput } from "../inputs/CategoriesOnProductsCreateWithoutProductInput";
import { CategoriesOnProductsScalarWhereInput } from "../inputs/CategoriesOnProductsScalarWhereInput";
import { CategoriesOnProductsUpdateManyWithWhereNestedInput } from "../inputs/CategoriesOnProductsUpdateManyWithWhereNestedInput";
import { CategoriesOnProductsUpdateWithWhereUniqueWithoutProductInput } from "../inputs/CategoriesOnProductsUpdateWithWhereUniqueWithoutProductInput";
import { CategoriesOnProductsUpsertWithWhereUniqueWithoutProductInput } from "../inputs/CategoriesOnProductsUpsertWithWhereUniqueWithoutProductInput";
import { CategoriesOnProductsWhereUniqueInput } from "../inputs/CategoriesOnProductsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnProductsUpdateManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [CategoriesOnProductsCreateWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  create?: CategoriesOnProductsCreateWithoutProductInput[] | null;

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

  @TypeGraphQL.Field(_type => [CategoriesOnProductsUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  update?: CategoriesOnProductsUpdateWithWhereUniqueWithoutProductInput[] | null;

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

  @TypeGraphQL.Field(_type => [CategoriesOnProductsUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  upsert?: CategoriesOnProductsUpsertWithWhereUniqueWithoutProductInput[] | null;
}
