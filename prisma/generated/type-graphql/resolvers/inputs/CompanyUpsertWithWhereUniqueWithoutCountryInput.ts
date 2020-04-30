import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutCountryInput } from "../inputs/CompanyCreateWithoutCountryInput";
import { CompanyUpdateWithoutCountryDataInput } from "../inputs/CompanyUpdateWithoutCountryDataInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyUpsertWithWhereUniqueWithoutCountryInput {
  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CompanyWhereUniqueInput;

  @TypeGraphQL.Field(_type => CompanyUpdateWithoutCountryDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CompanyUpdateWithoutCountryDataInput;

  @TypeGraphQL.Field(_type => CompanyCreateWithoutCountryInput, {
    nullable: false,
    description: undefined
  })
  create!: CompanyCreateWithoutCountryInput;
}
