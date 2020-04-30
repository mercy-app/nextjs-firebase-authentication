import * as TypeGraphQL from "type-graphql";
import { ProductsOnCounponCreateWithoutProductInput } from "../inputs/ProductsOnCounponCreateWithoutProductInput";
import { ProductsOnCounponScalarWhereInput } from "../inputs/ProductsOnCounponScalarWhereInput";
import { ProductsOnCounponUpdateManyWithWhereNestedInput } from "../inputs/ProductsOnCounponUpdateManyWithWhereNestedInput";
import { ProductsOnCounponUpdateWithWhereUniqueWithoutProductInput } from "../inputs/ProductsOnCounponUpdateWithWhereUniqueWithoutProductInput";
import { ProductsOnCounponUpsertWithWhereUniqueWithoutProductInput } from "../inputs/ProductsOnCounponUpsertWithWhereUniqueWithoutProductInput";
import { ProductsOnCounponWhereUniqueInput } from "../inputs/ProductsOnCounponWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductsOnCounponUpdateManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [ProductsOnCounponCreateWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  create?: ProductsOnCounponCreateWithoutProductInput[] | null;

  @TypeGraphQL.Field(_type => [ProductsOnCounponWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: ProductsOnCounponWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [ProductsOnCounponWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: ProductsOnCounponWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [ProductsOnCounponWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: ProductsOnCounponWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [ProductsOnCounponWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: ProductsOnCounponWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [ProductsOnCounponUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  update?: ProductsOnCounponUpdateWithWhereUniqueWithoutProductInput[] | null;

  @TypeGraphQL.Field(_type => [ProductsOnCounponUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: ProductsOnCounponUpdateManyWithWhereNestedInput[] | null;

  @TypeGraphQL.Field(_type => [ProductsOnCounponScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: ProductsOnCounponScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [ProductsOnCounponUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  upsert?: ProductsOnCounponUpsertWithWhereUniqueWithoutProductInput[] | null;
}
