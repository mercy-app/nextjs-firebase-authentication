import * as TypeGraphQL from "type-graphql";
import { OrderItemUpdateWithoutProductDataInput } from "../inputs/OrderItemUpdateWithoutProductDataInput";
import { OrderItemWhereUniqueInput } from "../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderItemUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => OrderItemWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: OrderItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderItemUpdateWithoutProductDataInput, {
    nullable: false,
    description: undefined
  })
  data!: OrderItemUpdateWithoutProductDataInput;
}
