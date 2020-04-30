import * as TypeGraphQL from "type-graphql";
import { CompanyUpdateManyWithoutCountryInput } from "../inputs/CompanyUpdateManyWithoutCountryInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CountryUpdateWithoutPlatformDataInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  code?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  currency?: string | null;

  @TypeGraphQL.Field(_type => CompanyUpdateManyWithoutCountryInput, {
    nullable: true,
    description: undefined
  })
  company?: CompanyUpdateManyWithoutCountryInput | null;
}
