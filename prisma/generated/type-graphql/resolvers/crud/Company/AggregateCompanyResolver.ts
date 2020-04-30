import * as TypeGraphQL from "type-graphql";
import { Company } from "../../../models/Company";
import { AggregateCompany } from "../../outputs/AggregateCompany";

@TypeGraphQL.Resolver(_of => Company)
export class AggregateCompanyResolver {
  @TypeGraphQL.Query(_returns => AggregateCompany, {
    nullable: false,
    description: undefined
  })
  async aggregateCompany(): Promise<AggregateCompany> {
    return new AggregateCompany();
  }
}
