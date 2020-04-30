import * as TypeGraphQL from "type-graphql";
import { OrderItemCreateWithoutOrderInput } from "../inputs/OrderItemCreateWithoutOrderInput";
import { OrderItemWhereUniqueInput } from "../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderItemCreateManyWithoutOrderInput {
  @TypeGraphQL.Field(_type => [OrderItemCreateWithoutOrderInput], {
    nullable: true,
    description: undefined
  })
  create?: OrderItemCreateWithoutOrderInput[] | null;

  @TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: OrderItemWhereUniqueInput[] | null;
}
