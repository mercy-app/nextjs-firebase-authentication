import * as TypeGraphQL from "type-graphql";
import { OrderItemCreateInput } from "../../../inputs/OrderItemCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOrderItemArgs {
  @TypeGraphQL.Field(_type => OrderItemCreateInput, { nullable: false })
  data!: OrderItemCreateInput;
}
