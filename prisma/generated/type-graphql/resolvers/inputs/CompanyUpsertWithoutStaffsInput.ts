import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutStaffsInput } from "../inputs/CompanyCreateWithoutStaffsInput";
import { CompanyUpdateWithoutStaffsDataInput } from "../inputs/CompanyUpdateWithoutStaffsDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyUpsertWithoutStaffsInput {
  @TypeGraphQL.Field(_type => CompanyUpdateWithoutStaffsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CompanyUpdateWithoutStaffsDataInput;

  @TypeGraphQL.Field(_type => CompanyCreateWithoutStaffsInput, {
    nullable: false,
    description: undefined
  })
  create!: CompanyCreateWithoutStaffsInput;
}
