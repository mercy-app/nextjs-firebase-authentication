import * as TypeGraphQL from "type-graphql";
import { OrderItemUpdateWithoutOrderDataInput } from "../inputs/OrderItemUpdateWithoutOrderDataInput";
import { OrderItemWhereUniqueInput } from "../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderItemUpdateWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => OrderItemWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: OrderItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderItemUpdateWithoutOrderDataInput, {
    nullable: false,
    description: undefined
  })
  data!: OrderItemUpdateWithoutOrderDataInput;
}
