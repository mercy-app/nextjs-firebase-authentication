import * as TypeGraphQL from "type-graphql";
import { StaffCreateInput } from "../../../inputs/StaffCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneStaffArgs {
  @TypeGraphQL.Field(_type => StaffCreateInput, { nullable: false })
  data!: StaffCreateInput;
}
