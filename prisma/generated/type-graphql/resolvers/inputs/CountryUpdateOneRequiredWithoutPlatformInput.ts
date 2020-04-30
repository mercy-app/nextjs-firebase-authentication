import * as TypeGraphQL from "type-graphql";
import { CountryCreateWithoutPlatformInput } from "../inputs/CountryCreateWithoutPlatformInput";
import { CountryUpdateWithoutPlatformDataInput } from "../inputs/CountryUpdateWithoutPlatformDataInput";
import { CountryUpsertWithoutPlatformInput } from "../inputs/CountryUpsertWithoutPlatformInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CountryUpdateOneRequiredWithoutPlatformInput {
  @TypeGraphQL.Field(_type => CountryCreateWithoutPlatformInput, {
    nullable: true,
    description: undefined
  })
  create?: CountryCreateWithoutPlatformInput | null;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: CountryWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => CountryUpdateWithoutPlatformDataInput, {
    nullable: true,
    description: undefined
  })
  update?: CountryUpdateWithoutPlatformDataInput | null;

  @TypeGraphQL.Field(_type => CountryUpsertWithoutPlatformInput, {
    nullable: true,
    description: undefined
  })
  upsert?: CountryUpsertWithoutPlatformInput | null;
}
