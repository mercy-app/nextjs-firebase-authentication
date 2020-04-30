import * as TypeGraphQL from "type-graphql";
import { CountryCreateWithoutCompanyInput } from "../inputs/CountryCreateWithoutCompanyInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CountryCreateOneWithoutCompanyInput {
  @TypeGraphQL.Field(_type => CountryCreateWithoutCompanyInput, {
    nullable: true,
    description: undefined
  })
  create?: CountryCreateWithoutCompanyInput | null;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: CountryWhereUniqueInput | null;
}
