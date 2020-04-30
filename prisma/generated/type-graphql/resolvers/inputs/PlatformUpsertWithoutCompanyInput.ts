import * as TypeGraphQL from "type-graphql";
import { PlatformCreateWithoutCompanyInput } from "../inputs/PlatformCreateWithoutCompanyInput";
import { PlatformUpdateWithoutCompanyDataInput } from "../inputs/PlatformUpdateWithoutCompanyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PlatformUpsertWithoutCompanyInput {
  @TypeGraphQL.Field(_type => PlatformUpdateWithoutCompanyDataInput, {
    nullable: false,
    description: undefined
  })
  update!: PlatformUpdateWithoutCompanyDataInput;

  @TypeGraphQL.Field(_type => PlatformCreateWithoutCompanyInput, {
    nullable: false,
    description: undefined
  })
  create!: PlatformCreateWithoutCompanyInput;
}
