import * as TypeGraphQL from "type-graphql";
import { OrderItemWhereInput } from "../inputs/OrderItemWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderItemFilter {
  @TypeGraphQL.Field(_type => OrderItemWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: OrderItemWhereInput | null;

  @TypeGraphQL.Field(_type => OrderItemWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: OrderItemWhereInput | null;

  @TypeGraphQL.Field(_type => OrderItemWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: OrderItemWhereInput | null;
}
