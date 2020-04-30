import * as TypeGraphQL from "type-graphql";
import { CountryCreateWithoutPlatformInput } from "../inputs/CountryCreateWithoutPlatformInput";
import { CountryUpdateWithoutPlatformDataInput } from "../inputs/CountryUpdateWithoutPlatformDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CountryUpsertWithoutPlatformInput {
  @TypeGraphQL.Field(_type => CountryUpdateWithoutPlatformDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CountryUpdateWithoutPlatformDataInput;

  @TypeGraphQL.Field(_type => CountryCreateWithoutPlatformInput, {
    nullable: false,
    description: undefined
  })
  create!: CountryCreateWithoutPlatformInput;
}
