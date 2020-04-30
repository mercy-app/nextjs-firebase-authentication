import * as TypeGraphQL from "type-graphql";
import { ProductUpdateOneRequiredWithoutOrdersInput } from "../inputs/ProductUpdateOneRequiredWithoutOrdersInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderItemUpdateWithoutOrderDataInput {
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
}
