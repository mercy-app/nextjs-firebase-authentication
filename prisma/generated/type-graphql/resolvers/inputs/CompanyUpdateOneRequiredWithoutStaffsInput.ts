import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutStaffsInput } from "../inputs/CompanyCreateWithoutStaffsInput";
import { CompanyUpdateWithoutStaffsDataInput } from "../inputs/CompanyUpdateWithoutStaffsDataInput";
import { CompanyUpsertWithoutStaffsInput } from "../inputs/CompanyUpsertWithoutStaffsInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyUpdateOneRequiredWithoutStaffsInput {
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

  @TypeGraphQL.Field(_type => CompanyUpdateWithoutStaffsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: CompanyUpdateWithoutStaffsDataInput | null;

  @TypeGraphQL.Field(_type => CompanyUpsertWithoutStaffsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: CompanyUpsertWithoutStaffsInput | null;
}
