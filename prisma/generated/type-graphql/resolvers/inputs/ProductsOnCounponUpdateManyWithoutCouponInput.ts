import * as TypeGraphQL from "type-graphql";
import { ProductsOnCounponCreateWithoutCouponInput } from "../inputs/ProductsOnCounponCreateWithoutCouponInput";
import { ProductsOnCounponScalarWhereInput } from "../inputs/ProductsOnCounponScalarWhereInput";
import { ProductsOnCounponUpdateManyWithWhereNestedInput } from "../inputs/ProductsOnCounponUpdateManyWithWhereNestedInput";
import { ProductsOnCounponUpdateWithWhereUniqueWithoutCouponInput } from "../inputs/ProductsOnCounponUpdateWithWhereUniqueWithoutCouponInput";
import { ProductsOnCounponUpsertWithWhereUniqueWithoutCouponInput } from "../inputs/ProductsOnCounponUpsertWithWhereUniqueWithoutCouponInput";
import { ProductsOnCounponWhereUniqueInput } from "../inputs/ProductsOnCounponWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductsOnCounponUpdateManyWithoutCouponInput {
  @TypeGraphQL.Field(_type => [ProductsOnCounponCreateWithoutCouponInput], {
    nullable: true,
    description: undefined
  })
  create?: ProductsOnCounponCreateWithoutCouponInput[] | null;

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

  @TypeGraphQL.Field(_type => [ProductsOnCounponUpdateWithWhereUniqueWithoutCouponInput], {
    nullable: true,
    description: undefined
  })
  update?: ProductsOnCounponUpdateWithWhereUniqueWithoutCouponInput[] | null;

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

  @TypeGraphQL.Field(_type => [ProductsOnCounponUpsertWithWhereUniqueWithoutCouponInput], {
    nullable: true,
    description: undefined
  })
  upsert?: ProductsOnCounponUpsertWithWhereUniqueWithoutCouponInput[] | null;
}
