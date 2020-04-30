import * as TypeGraphQL from "type-graphql";
import { CompanyUpdateOneRequiredWithoutStaffsInput } from "../inputs/CompanyUpdateOneRequiredWithoutStaffsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StaffUpdateWithoutUserDataInput {
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

  @TypeGraphQL.Field(_type => CompanyUpdateOneRequiredWithoutStaffsInput, {
    nullable: true,
    description: undefined
  })
  company?: CompanyUpdateOneRequiredWithoutStaffsInput | null;
}
