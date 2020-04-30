import * as TypeGraphQL from "type-graphql";
import { OrderCreateOneWithoutProductsInput } from "../inputs/OrderCreateOneWithoutProductsInput";
import { ProductCreateOneWithoutOrdersInput } from "../inputs/ProductCreateOneWithoutOrdersInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderItemCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => ProductCreateOneWithoutOrdersInput, {
    nullable: false,
    description: undefined
  })
  product!: ProductCreateOneWithoutOrdersInput;

  @TypeGraphQL.Field(_type => OrderCreateOneWithoutProductsInput, {
    nullable: false,
    description: undefined
  })
  order!: OrderCreateOneWithoutProductsInput;
}
