import * as TypeGraphQL from "type-graphql";
import { Customer } from "../../../models/Customer";
import { AggregateCustomer } from "../../outputs/AggregateCustomer";

@TypeGraphQL.Resolver(_of => Customer)
export class AggregateCustomerResolver {
  @TypeGraphQL.Query(_returns => AggregateCustomer, {
    nullable: false,
    description: undefined
  })
  async aggregateCustomer(): Promise<AggregateCustomer> {
    return new AggregateCustomer();
  }
}
