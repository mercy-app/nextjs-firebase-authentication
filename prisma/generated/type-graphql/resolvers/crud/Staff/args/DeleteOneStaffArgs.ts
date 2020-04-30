import * as TypeGraphQL from "type-graphql";
import { StaffWhereUniqueInput } from "../../../inputs/StaffWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneStaffArgs {
  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, { nullable: false })
  where!: StaffWhereUniqueInput;
}
