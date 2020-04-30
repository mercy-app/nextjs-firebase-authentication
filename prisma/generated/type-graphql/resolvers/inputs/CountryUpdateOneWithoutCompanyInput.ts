import * as TypeGraphQL from "type-graphql";
import { CountryCreateWithoutCompanyInput } from "../inputs/CountryCreateWithoutCompanyInput";
import { CountryUpdateWithoutCompanyDataInput } from "../inputs/CountryUpdateWithoutCompanyDataInput";
import { CountryUpsertWithoutCompanyInput } from "../inputs/CountryUpsertWithoutCompanyInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CountryUpdateOneWithoutCompanyInput {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  disconnect?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  delete?: boolean | null;

  @TypeGraphQL.Field(_type => CountryUpdateWithoutCompanyDataInput, {
    nullable: true,
    description: undefined
  })
  update?: CountryUpdateWithoutCompanyDataInput | null;

  @TypeGraphQL.Field(_type => CountryUpsertWithoutCompanyInput, {
    nullable: true,
    description: undefined
  })
  upsert?: CountryUpsertWithoutCompanyInput | null;
}
