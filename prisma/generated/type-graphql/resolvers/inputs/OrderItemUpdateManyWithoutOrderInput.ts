import * as TypeGraphQL from "type-graphql";
import { OrderItemCreateWithoutOrderInput } from "../inputs/OrderItemCreateWithoutOrderInput";
import { OrderItemScalarWhereInput } from "../inputs/OrderItemScalarWhereInput";
import { OrderItemUpdateManyWithWhereNestedInput } from "../inputs/OrderItemUpdateManyWithWhereNestedInput";
import { OrderItemUpdateWithWhereUniqueWithoutOrderInput } from "../inputs/OrderItemUpdateWithWhereUniqueWithoutOrderInput";
import { OrderItemUpsertWithWhereUniqueWithoutOrderInput } from "../inputs/OrderItemUpsertWithWhereUniqueWithoutOrderInput";
import { OrderItemWhereUniqueInput } from "../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderItemUpdateManyWithoutOrderInput {
  @TypeGraphQL.Field(_type => [OrderItemCreateWithoutOrderInput], {
    nullable: true,
    description: undefined
  })
  create?: OrderItemCreateWithoutOrderInput[] | null;

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

  @TypeGraphQL.Field(_type => [OrderItemUpdateWithWhereUniqueWithoutOrderInput], {
    nullable: true,
    description: undefined
  })
  update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput[] | null;

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

  @TypeGraphQL.Field(_type => [OrderItemUpsertWithWhereUniqueWithoutOrderInput], {
    nullable: true,
    description: undefined
  })
  upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput[] | null;
}
