import * as TypeGraphQL from "type-graphql";
import { OrderItemCreateWithoutOrderInput } from "../inputs/OrderItemCreateWithoutOrderInput";
import { OrderItemUpdateWithoutOrderDataInput } from "../inputs/OrderItemUpdateWithoutOrderDataInput";
import { OrderItemWhereUniqueInput } from "../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderItemUpsertWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => OrderItemWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: OrderItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderItemUpdateWithoutOrderDataInput, {
    nullable: false,
    description: undefined
  })
  update!: OrderItemUpdateWithoutOrderDataInput;

  @TypeGraphQL.Field(_type => OrderItemCreateWithoutOrderInput, {
    nullable: false,
    description: undefined
  })
  create!: OrderItemCreateWithoutOrderInput;
}
