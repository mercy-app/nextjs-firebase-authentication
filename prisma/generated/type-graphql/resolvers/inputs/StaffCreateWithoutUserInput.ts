import * as TypeGraphQL from "type-graphql";
import { CompanyCreateOneWithoutStaffsInput } from "../inputs/CompanyCreateOneWithoutStaffsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StaffCreateWithoutUserInput {
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

  @TypeGraphQL.Field(_type => CompanyCreateOneWithoutStaffsInput, {
    nullable: false,
    description: undefined
  })
  company!: CompanyCreateOneWithoutStaffsInput;
}
