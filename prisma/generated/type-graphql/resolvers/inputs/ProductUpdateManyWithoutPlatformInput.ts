import * as TypeGraphQL from "type-graphql";
import { ProductCreateWithoutPlatformInput } from "../inputs/ProductCreateWithoutPlatformInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereNestedInput } from "../inputs/ProductUpdateManyWithWhereNestedInput";
import { ProductUpdateWithWhereUniqueWithoutPlatformInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutPlatformInput";
import { ProductUpsertWithWhereUniqueWithoutPlatformInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutPlatformInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductUpdateManyWithoutPlatformInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutPlatformInput], {
    nullable: true,
    description: undefined
  })
  create?: ProductCreateWithoutPlatformInput[] | null;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: ProductWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: ProductWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: ProductWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: ProductWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutPlatformInput], {
    nullable: true,
    description: undefined
  })
  update?: ProductUpdateWithWhereUniqueWithoutPlatformInput[] | null;

  @TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: ProductUpdateManyWithWhereNestedInput[] | null;

  @TypeGraphQL.Field(_type => [ProductScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: ProductScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutPlatformInput], {
    nullable: true,
    description: undefined
  })
  upsert?: ProductUpsertWithWhereUniqueWithoutPlatformInput[] | null;
}
