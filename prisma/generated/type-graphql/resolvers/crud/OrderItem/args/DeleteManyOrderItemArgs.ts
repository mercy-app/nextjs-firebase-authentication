import * as TypeGraphQL from "type-graphql";
import { OrderItemWhereInput } from "../../../inputs/OrderItemWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOrderItemArgs {
  @TypeGraphQL.Field(_type => OrderItemWhereInput, { nullable: true })
  where?: OrderItemWhereInput | null;
}
