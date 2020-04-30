import * as TypeGraphQL from "type-graphql";
import { CountryCreateWithoutPlatformInput } from "../inputs/CountryCreateWithoutPlatformInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CountryCreateOneWithoutPlatformInput {
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
}
