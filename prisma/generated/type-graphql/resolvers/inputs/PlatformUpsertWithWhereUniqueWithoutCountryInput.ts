import * as TypeGraphQL from "type-graphql";
import { PlatformCreateWithoutCountryInput } from "../inputs/PlatformCreateWithoutCountryInput";
import { PlatformUpdateWithoutCountryDataInput } from "../inputs/PlatformUpdateWithoutCountryDataInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PlatformUpsertWithWhereUniqueWithoutCountryInput {
  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: PlatformWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlatformUpdateWithoutCountryDataInput, {
    nullable: false,
    description: undefined
  })
  update!: PlatformUpdateWithoutCountryDataInput;

  @TypeGraphQL.Field(_type => PlatformCreateWithoutCountryInput, {
    nullable: false,
    description: undefined
  })
  create!: PlatformCreateWithoutCountryInput;
}
