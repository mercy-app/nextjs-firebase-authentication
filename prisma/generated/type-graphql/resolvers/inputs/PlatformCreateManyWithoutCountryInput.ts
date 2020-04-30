import * as TypeGraphQL from "type-graphql";
import { PlatformCreateWithoutCountryInput } from "../inputs/PlatformCreateWithoutCountryInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PlatformCreateManyWithoutCountryInput {
  @TypeGraphQL.Field(_type => [PlatformCreateWithoutCountryInput], {
    nullable: true,
    description: undefined
  })
  create?: PlatformCreateWithoutCountryInput[] | null;

  @TypeGraphQL.Field(_type => [PlatformWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: PlatformWhereUniqueInput[] | null;
}
