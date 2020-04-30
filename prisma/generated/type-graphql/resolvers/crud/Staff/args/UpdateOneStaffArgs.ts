import * as TypeGraphQL from "type-graphql";
import { StaffUpdateInput } from "../../../inputs/StaffUpdateInput";
import { StaffWhereUniqueInput } from "../../../inputs/StaffWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneStaffArgs {
  @TypeGraphQL.Field(_type => StaffUpdateInput, { nullable: false })
  data!: StaffUpdateInput;

  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, { nullable: false })
  where!: StaffWhereUniqueInput;
}
