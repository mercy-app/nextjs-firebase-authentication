import * as TypeGraphQL from "type-graphql";
import { PlatformCreateWithoutCompanyInput } from "../inputs/PlatformCreateWithoutCompanyInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PlatformCreateOneWithoutCompanyInput {
  @TypeGraphQL.Field(_type => PlatformCreateWithoutCompanyInput, {
    nullable: true,
    description: undefined
  })
  create?: PlatformCreateWithoutCompanyInput | null;

  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: PlatformWhereUniqueInput | null;
}
