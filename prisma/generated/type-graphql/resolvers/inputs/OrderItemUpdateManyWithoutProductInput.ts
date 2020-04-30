import * as TypeGraphQL from "type-graphql";
import { OrderItemCreateWithoutProductInput } from "../inputs/OrderItemCreateWithoutProductInput";
import { OrderItemScalarWhereInput } from "../inputs/OrderItemScalarWhereInput";
import { OrderItemUpdateManyWithWhereNestedInput } from "../inputs/OrderItemUpdateManyWithWhereNestedInput";
import { OrderItemUpdateWithWhereUniqueWithoutProductInput } from "../inputs/OrderItemUpdateWithWhereUniqueWithoutProductInput";
import { OrderItemUpsertWithWhereUniqueWithoutProductInput } from "../inputs/OrderItemUpsertWithWhereUniqueWithoutProductInput";
import { OrderItemWhereUniqueInput } from "../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderItemUpdateManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [OrderItemCreateWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  create?: OrderItemCreateWithoutProductInput[] | null;

  @TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: OrderItemWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: OrderItemWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: OrderItemWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: OrderItemWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [OrderItemUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  update?: OrderItemUpdateWithWhereUniqueWithoutProductInput[] | null;

  @TypeGraphQL.Field(_type => [OrderItemUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: OrderItemUpdateManyWithWhereNestedInput[] | null;

  @TypeGraphQL.Field(_type => [OrderItemScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: OrderItemScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [OrderItemUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput[] | null;
}
