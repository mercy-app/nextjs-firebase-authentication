import * as TypeGraphQL from "type-graphql";
import { OrderCreateWithoutProductsInput } from "../inputs/OrderCreateWithoutProductsInput";
import { OrderUpdateWithoutProductsDataInput } from "../inputs/OrderUpdateWithoutProductsDataInput";
import { OrderUpsertWithoutProductsInput } from "../inputs/OrderUpsertWithoutProductsInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderUpdateOneRequiredWithoutProductsInput {
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

  @TypeGraphQL.Field(_type => OrderUpdateWithoutProductsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: OrderUpdateWithoutProductsDataInput | null;

  @TypeGraphQL.Field(_type => OrderUpsertWithoutProductsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: OrderUpsertWithoutProductsInput | null;
}
