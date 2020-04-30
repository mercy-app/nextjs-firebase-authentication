import * as TypeGraphQL from "type-graphql";
import { OrderItemWhereUniqueInput } from "../../../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneOrderItemArgs {
  @TypeGraphQL.Field(_type => OrderItemWhereUniqueInput, { nullable: false })
  where!: OrderItemWhereUniqueInput;
}
