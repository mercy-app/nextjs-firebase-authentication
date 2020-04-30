import * as TypeGraphQL from "type-graphql";
import { Staff } from "../../../models/Staff";
import { AggregateStaff } from "../../outputs/AggregateStaff";

@TypeGraphQL.Resolver(_of => Staff)
export class AggregateStaffResolver {
  @TypeGraphQL.Query(_returns => AggregateStaff, {
    nullable: false,
    description: undefined
  })
  async aggregateStaff(): Promise<AggregateStaff> {
    return new AggregateStaff();
  }
}
