import * as TypeGraphQL from "type-graphql";
import { OrderItemScalarWhereInput } from "../inputs/OrderItemScalarWhereInput";
import { OrderItemUpdateManyDataInput } from "../inputs/OrderItemUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderItemUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => OrderItemScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: OrderItemScalarWhereInput;

  @TypeGraphQL.Field(_type => OrderItemUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: OrderItemUpdateManyDataInput;
}
