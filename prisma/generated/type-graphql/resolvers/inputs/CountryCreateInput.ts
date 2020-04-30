import * as TypeGraphQL from "type-graphql";
import { CompanyCreateManyWithoutCountryInput } from "../inputs/CompanyCreateManyWithoutCountryInput";
import { PlatformCreateManyWithoutCountryInput } from "../inputs/PlatformCreateManyWithoutCountryInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CountryCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  code!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  currency!: string;

  @TypeGraphQL.Field(_type => CompanyCreateManyWithoutCountryInput, {
    nullable: true,
    description: undefined
  })
  company?: CompanyCreateManyWithoutCountryInput | null;

  @TypeGraphQL.Field(_type => PlatformCreateManyWithoutCountryInput, {
    nullable: true,
    description: undefined
  })
  platform?: PlatformCreateManyWithoutCountryInput | null;
}
