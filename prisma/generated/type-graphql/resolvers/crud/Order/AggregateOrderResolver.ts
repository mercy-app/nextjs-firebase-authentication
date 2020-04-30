import * as TypeGraphQL from "type-graphql";
import { Order } from "../../../models/Order";
import { AggregateOrder } from "../../outputs/AggregateOrder";

@TypeGraphQL.Resolver(_of => Order)
export class AggregateOrderResolver {
  @TypeGraphQL.Query(_returns => AggregateOrder, {
    nullable: false,
    description: undefined
  })
  async aggregateOrder(): Promise<AggregateOrder> {
    return new AggregateOrder();
  }
}
