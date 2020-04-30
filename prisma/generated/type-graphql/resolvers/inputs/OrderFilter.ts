import * as TypeGraphQL from "type-graphql";
import { OrderWhereInput } from "../inputs/OrderWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderFilter {
  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: OrderWhereInput | null;

  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: OrderWhereInput | null;

  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: OrderWhereInput | null;
}
