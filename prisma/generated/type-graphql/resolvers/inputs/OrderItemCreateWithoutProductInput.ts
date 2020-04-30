import * as TypeGraphQL from "type-graphql";
import { OrderCreateOneWithoutProductsInput } from "../inputs/OrderCreateOneWithoutProductsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderItemCreateWithoutProductInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => OrderCreateOneWithoutProductsInput, {
    nullable: false,
    description: undefined
  })
  order!: OrderCreateOneWithoutProductsInput;
}
