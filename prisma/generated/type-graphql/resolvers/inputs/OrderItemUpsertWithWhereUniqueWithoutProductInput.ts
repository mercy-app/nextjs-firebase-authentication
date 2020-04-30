import * as TypeGraphQL from "type-graphql";
import { OrderItemCreateWithoutProductInput } from "../inputs/OrderItemCreateWithoutProductInput";
import { OrderItemUpdateWithoutProductDataInput } from "../inputs/OrderItemUpdateWithoutProductDataInput";
import { OrderItemWhereUniqueInput } from "../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderItemUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => OrderItemWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: OrderItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderItemUpdateWithoutProductDataInput, {
    nullable: false,
    description: undefined
  })
  update!: OrderItemUpdateWithoutProductDataInput;

  @TypeGraphQL.Field(_type => OrderItemCreateWithoutProductInput, {
    nullable: false,
    description: undefined
  })
  create!: OrderItemCreateWithoutProductInput;
}
