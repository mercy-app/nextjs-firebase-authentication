import * as TypeGraphQL from "type-graphql";
import { PlatformUpdateWithoutCountryDataInput } from "../inputs/PlatformUpdateWithoutCountryDataInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PlatformUpdateWithWhereUniqueWithoutCountryInput {
  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: PlatformWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlatformUpdateWithoutCountryDataInput, {
    nullable: false,
    description: undefined
  })
  data!: PlatformUpdateWithoutCountryDataInput;
}
