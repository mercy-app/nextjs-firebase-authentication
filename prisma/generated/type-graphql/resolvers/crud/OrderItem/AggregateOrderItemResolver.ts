import * as TypeGraphQL from "type-graphql";
import { OrderItem } from "../../../models/OrderItem";
import { AggregateOrderItem } from "../../outputs/AggregateOrderItem";

@TypeGraphQL.Resolver(_of => OrderItem)
export class AggregateOrderItemResolver {
  @TypeGraphQL.Query(_returns => AggregateOrderItem, {
    nullable: false,
    description: undefined
  })
  async aggregateOrderItem(): Promise<AggregateOrderItem> {
    return new AggregateOrderItem();
  }
}
