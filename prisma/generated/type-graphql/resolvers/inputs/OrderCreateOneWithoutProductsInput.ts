import * as TypeGraphQL from "type-graphql";
import { OrderCreateWithoutProductsInput } from "../inputs/OrderCreateWithoutProductsInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderCreateOneWithoutProductsInput {
  @TypeGraphQL.Field(_type => OrderCreateWithoutProductsInput, {
    nullable: true,
    description: undefined
  })
  create?: OrderCreateWithoutProductsInput | null;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: OrderWhereUniqueInput | null;
}
