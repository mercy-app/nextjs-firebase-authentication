import * as TypeGraphQL from "type-graphql";
import { OrderCreateWithoutProductsInput } from "../inputs/OrderCreateWithoutProductsInput";
import { OrderUpdateWithoutProductsDataInput } from "../inputs/OrderUpdateWithoutProductsDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderUpsertWithoutProductsInput {
  @TypeGraphQL.Field(_type => OrderUpdateWithoutProductsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: OrderUpdateWithoutProductsDataInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutProductsInput, {
    nullable: false,
    description: undefined
  })
  create!: OrderCreateWithoutProductsInput;
}
