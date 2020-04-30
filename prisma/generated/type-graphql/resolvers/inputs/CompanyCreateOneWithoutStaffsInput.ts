import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutStaffsInput } from "../inputs/CompanyCreateWithoutStaffsInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyCreateOneWithoutStaffsInput {
  @TypeGraphQL.Field(_type => CompanyCreateWithoutStaffsInput, {
    nullable: true,
    description: undefined
  })
  create?: CompanyCreateWithoutStaffsInput | null;

  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: CompanyWhereUniqueInput | null;
}
