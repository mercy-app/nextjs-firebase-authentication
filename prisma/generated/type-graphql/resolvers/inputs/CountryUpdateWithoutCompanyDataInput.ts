import * as TypeGraphQL from "type-graphql";
import { PlatformUpdateManyWithoutCountryInput } from "../inputs/PlatformUpdateManyWithoutCountryInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CountryUpdateWithoutCompanyDataInput {
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

  @TypeGraphQL.Field(_type => PlatformUpdateManyWithoutCountryInput, {
    nullable: true,
    description: undefined
  })
  platform?: PlatformUpdateManyWithoutCountryInput | null;
}
