import * as TypeGraphQL from "type-graphql";
import { OrderUpdateOneRequiredWithoutProductsInput } from "../inputs/OrderUpdateOneRequiredWithoutProductsInput";
import { ProductUpdateOneRequiredWithoutOrdersInput } from "../inputs/ProductUpdateOneRequiredWithoutOrdersInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderItemUpdateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutOrdersInput, {
    nullable: true,
    description: undefined
  })
  product?: ProductUpdateOneRequiredWithoutOrdersInput | null;

  @TypeGraphQL.Field(_type => OrderUpdateOneRequiredWithoutProductsInput, {
    nullable: true,
    description: undefined
  })
  order?: OrderUpdateOneRequiredWithoutProductsInput | null;
}
