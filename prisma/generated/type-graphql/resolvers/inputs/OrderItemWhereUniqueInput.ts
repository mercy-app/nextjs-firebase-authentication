import * as TypeGraphQL from "type-graphql";
import { ProductIdOrderIdCompoundUniqueInput } from "../inputs/ProductIdOrderIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderItemWhereUniqueInput {
  @TypeGraphQL.Field(_type => ProductIdOrderIdCompoundUniqueInput, {
    nullable: true,
    description: undefined
  })
  productId_orderId?: ProductIdOrderIdCompoundUniqueInput | null;
}
