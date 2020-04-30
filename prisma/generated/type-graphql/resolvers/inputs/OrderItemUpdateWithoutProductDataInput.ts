import * as TypeGraphQL from "type-graphql";
import { OrderUpdateOneRequiredWithoutProductsInput } from "../inputs/OrderUpdateOneRequiredWithoutProductsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderItemUpdateWithoutProductDataInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => OrderUpdateOneRequiredWithoutProductsInput, {
    nullable: true,
    description: undefined
  })
  order?: OrderUpdateOneRequiredWithoutProductsInput | null;
}
