import * as TypeGraphQL from "type-graphql";
import { OrderCreateWithoutCompanyInput } from "../inputs/OrderCreateWithoutCompanyInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereNestedInput } from "../inputs/OrderUpdateManyWithWhereNestedInput";
import { OrderUpdateWithWhereUniqueWithoutCompanyInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutCompanyInput";
import { OrderUpsertWithWhereUniqueWithoutCompanyInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutCompanyInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderUpdateManyWithoutCompanyInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutCompanyInput], {
    nullable: true,
    description: undefined
  })
  create?: OrderCreateWithoutCompanyInput[] | null;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: OrderWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: OrderWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: OrderWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: OrderWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutCompanyInput], {
    nullable: true,
    description: undefined
  })
  update?: OrderUpdateWithWhereUniqueWithoutCompanyInput[] | null;

  @TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: OrderUpdateManyWithWhereNestedInput[] | null;

  @TypeGraphQL.Field(_type => [OrderScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: OrderScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutCompanyInput], {
    nullable: true,
    description: undefined
  })
  upsert?: OrderUpsertWithWhereUniqueWithoutCompanyInput[] | null;
}
