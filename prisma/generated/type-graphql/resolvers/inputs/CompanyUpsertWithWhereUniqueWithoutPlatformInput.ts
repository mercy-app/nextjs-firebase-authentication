import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutPlatformInput } from "../inputs/CompanyCreateWithoutPlatformInput";
import { CompanyUpdateWithoutPlatformDataInput } from "../inputs/CompanyUpdateWithoutPlatformDataInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyUpsertWithWhereUniqueWithoutPlatformInput {
  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CompanyWhereUniqueInput;

  @TypeGraphQL.Field(_type => CompanyUpdateWithoutPlatformDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CompanyUpdateWithoutPlatformDataInput;

  @TypeGraphQL.Field(_type => CompanyCreateWithoutPlatformInput, {
    nullable: false,
    description: undefined
  })
  create!: CompanyCreateWithoutPlatformInput;
}
