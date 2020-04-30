import * as TypeGraphQL from "type-graphql";
import { OrderItemUpdateInput } from "../../../inputs/OrderItemUpdateInput";
import { OrderItemWhereUniqueInput } from "../../../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneOrderItemArgs {
  @TypeGraphQL.Field(_type => OrderItemUpdateInput, { nullable: false })
  data!: OrderItemUpdateInput;

  @TypeGraphQL.Field(_type => OrderItemWhereUniqueInput, { nullable: false })
  where!: OrderItemWhereUniqueInput;
}
