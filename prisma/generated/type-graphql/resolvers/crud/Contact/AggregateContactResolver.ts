import * as TypeGraphQL from "type-graphql";
import { Contact } from "../../../models/Contact";
import { AggregateContact } from "../../outputs/AggregateContact";

@TypeGraphQL.Resolver(_of => Contact)
export class AggregateContactResolver {
  @TypeGraphQL.Query(_returns => AggregateContact, {
    nullable: false,
    description: undefined
  })
  async aggregateContact(): Promise<AggregateContact> {
    return new AggregateContact();
  }
}
