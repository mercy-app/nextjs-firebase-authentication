import * as TypeGraphQL from "type-graphql";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyDataInput } from "../inputs/OrderUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => OrderScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: OrderScalarWhereInput;

  @TypeGraphQL.Field(_type => OrderUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: OrderUpdateManyDataInput;
}
