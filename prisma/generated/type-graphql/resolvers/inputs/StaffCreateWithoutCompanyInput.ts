import * as TypeGraphQL from "type-graphql";
import { UserCreateOneWithoutStaffInput } from "../inputs/UserCreateOneWithoutStaffInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StaffCreateWithoutCompanyInput {
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
}
