import * as TypeGraphQL from "type-graphql";
import { Country } from "../../../models/Country";
import { AggregateCountry } from "../../outputs/AggregateCountry";

@TypeGraphQL.Resolver(_of => Country)
export class AggregateCountryResolver {
  @TypeGraphQL.Query(_returns => AggregateCountry, {
    nullable: false,
    description: undefined
  })
  async aggregateCountry(): Promise<AggregateCountry> {
    return new AggregateCountry();
  }
}
