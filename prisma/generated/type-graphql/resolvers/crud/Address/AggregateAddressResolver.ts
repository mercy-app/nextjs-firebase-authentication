import * as TypeGraphQL from "type-graphql";
import { Address } from "../../../models/Address";
import { AggregateAddress } from "../../outputs/AggregateAddress";

@TypeGraphQL.Resolver(_of => Address)
export class AggregateAddressResolver {
  @TypeGraphQL.Query(_returns => AggregateAddress, {
    nullable: false,
    description: undefined
  })
  async aggregateAddress(): Promise<AggregateAddress> {
    return new AggregateAddress();
  }
}
