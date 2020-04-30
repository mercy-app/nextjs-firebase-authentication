import * as TypeGraphQL from "type-graphql";
import { StaffOrderByInput } from "../../../inputs/StaffOrderByInput";
import { StaffWhereInput } from "../../../inputs/StaffWhereInput";
import { StaffWhereUniqueInput } from "../../../inputs/StaffWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class CompanyStaffsArgs {
  @TypeGraphQL.Field(_type => StaffWhereInput, { nullable: true })
  where?: StaffWhereInput | null;

  @TypeGraphQL.Field(_type => StaffOrderByInput, { nullable: true })
  orderBy?: StaffOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, { nullable: true })
  after?: StaffWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, { nullable: true })
  before?: StaffWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
