import * as TypeGraphQL from "type-graphql";
import { Card } from "../../../models/Card";
import { AggregateCard } from "../../outputs/AggregateCard";

@TypeGraphQL.Resolver(_of => Card)
export class AggregateCardResolver {
  @TypeGraphQL.Query(_returns => AggregateCard, {
    nullable: false,
    description: undefined
  })
  async aggregateCard(): Promise<AggregateCard> {
    return new AggregateCard();
  }
}
