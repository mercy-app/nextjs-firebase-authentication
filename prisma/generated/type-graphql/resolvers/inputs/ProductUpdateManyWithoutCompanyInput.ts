import * as TypeGraphQL from "type-graphql";
import { ProductCreateWithoutCompanyInput } from "../inputs/ProductCreateWithoutCompanyInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereNestedInput } from "../inputs/ProductUpdateManyWithWhereNestedInput";
import { ProductUpdateWithWhereUniqueWithoutCompanyInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutCompanyInput";
import { ProductUpsertWithWhereUniqueWithoutCompanyInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutCompanyInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductUpdateManyWithoutCompanyInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutCompanyInput], {
    nullable: true,
    description: undefined
  })
  create?: ProductCreateWithoutCompanyInput[] | null;

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

  @TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutCompanyInput], {
    nullable: true,
    description: undefined
  })
  update?: ProductUpdateWithWhereUniqueWithoutCompanyInput[] | null;

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

  @TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutCompanyInput], {
    nullable: true,
    description: undefined
  })
  upsert?: ProductUpsertWithWhereUniqueWithoutCompanyInput[] | null;
}
