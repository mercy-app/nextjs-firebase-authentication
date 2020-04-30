import * as TypeGraphQL from "type-graphql";
import { OrderItemWhereUniqueInput } from "../../../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneOrderItemArgs {
  @TypeGraphQL.Field(_type => OrderItemWhereUniqueInput, { nullable: false })
  where!: OrderItemWhereUniqueInput;
}
