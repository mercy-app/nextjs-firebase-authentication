import * as TypeGraphQL from "type-graphql";
import { UserUpdateOneRequiredWithoutStaffInput } from "../inputs/UserUpdateOneRequiredWithoutStaffInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StaffUpdateWithoutCompanyDataInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  role?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutStaffInput, {
    nullable: true,
    description: undefined
  })
  user?: UserUpdateOneRequiredWithoutStaffInput | null;
}
