import * as TypeGraphQL from "type-graphql";
import { OrderItemCreateWithoutProductInput } from "../inputs/OrderItemCreateWithoutProductInput";
import { OrderItemWhereUniqueInput } from "../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderItemCreateManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [OrderItemCreateWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  create?: OrderItemCreateWithoutProductInput[] | null;

  @TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: OrderItemWhereUniqueInput[] | null;
}
