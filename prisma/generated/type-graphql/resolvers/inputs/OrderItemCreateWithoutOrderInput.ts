import * as TypeGraphQL from "type-graphql";
import { ProductCreateOneWithoutOrdersInput } from "../inputs/ProductCreateOneWithoutOrdersInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderItemCreateWithoutOrderInput {
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
}
