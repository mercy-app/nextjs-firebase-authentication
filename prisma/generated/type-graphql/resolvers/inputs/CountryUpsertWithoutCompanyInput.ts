import * as TypeGraphQL from "type-graphql";
import { CountryCreateWithoutCompanyInput } from "../inputs/CountryCreateWithoutCompanyInput";
import { CountryUpdateWithoutCompanyDataInput } from "../inputs/CountryUpdateWithoutCompanyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CountryUpsertWithoutCompanyInput {
  @TypeGraphQL.Field(_type => CountryUpdateWithoutCompanyDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CountryUpdateWithoutCompanyDataInput;

  @TypeGraphQL.Field(_type => CountryCreateWithoutCompanyInput, {
    nullable: false,
    description: undefined
  })
  create!: CountryCreateWithoutCompanyInput;
}
