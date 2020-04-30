import * as TypeGraphQL from "type-graphql";
import { OrderItemCreateInput } from "../../../inputs/OrderItemCreateInput";
import { OrderItemUpdateInput } from "../../../inputs/OrderItemUpdateInput";
import { OrderItemWhereUniqueInput } from "../../../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneOrderItemArgs {
  @TypeGraphQL.Field(_type => OrderItemWhereUniqueInput, { nullable: false })
  where!: OrderItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderItemCreateInput, { nullable: false })
  create!: OrderItemCreateInput;

  @TypeGraphQL.Field(_type => OrderItemUpdateInput, { nullable: false })
  update!: OrderItemUpdateInput;
}
