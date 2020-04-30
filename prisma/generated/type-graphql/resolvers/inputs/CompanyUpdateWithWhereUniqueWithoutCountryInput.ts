import * as TypeGraphQL from "type-graphql";
import { CompanyUpdateWithoutCountryDataInput } from "../inputs/CompanyUpdateWithoutCountryDataInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyUpdateWithWhereUniqueWithoutCountryInput {
  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CompanyWhereUniqueInput;

  @TypeGraphQL.Field(_type => CompanyUpdateWithoutCountryDataInput, {
    nullable: false,
    description: undefined
  })
  data!: CompanyUpdateWithoutCountryDataInput;
}
