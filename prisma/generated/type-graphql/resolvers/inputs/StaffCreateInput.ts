import * as TypeGraphQL from "type-graphql";
import { CompanyCreateOneWithoutStaffsInput } from "../inputs/CompanyCreateOneWithoutStaffsInput";
import { UserCreateOneWithoutStaffInput } from "../inputs/UserCreateOneWithoutStaffInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StaffCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  role!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => UserCreateOneWithoutStaffInput, {
    nullable: false,
    description: undefined
  })
  user!: UserCreateOneWithoutStaffInput;

  @TypeGraphQL.Field(_type => CompanyCreateOneWithoutStaffsInput, {
    nullable: false,
    description: undefined
  })
  company!: CompanyCreateOneWithoutStaffsInput;
}
