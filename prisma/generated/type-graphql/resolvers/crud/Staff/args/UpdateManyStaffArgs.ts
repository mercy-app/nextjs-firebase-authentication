import * as TypeGraphQL from "type-graphql";
import { StaffUpdateManyMutationInput } from "../../../inputs/StaffUpdateManyMutationInput";
import { StaffWhereInput } from "../../../inputs/StaffWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyStaffArgs {
  @TypeGraphQL.Field(_type => StaffUpdateManyMutationInput, { nullable: false })
  data!: StaffUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => StaffWhereInput, { nullable: true })
  where?: StaffWhereInput | null;
}
