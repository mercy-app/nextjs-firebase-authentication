import * as TypeGraphQL from "type-graphql";
import { CompanyUpdateWithoutPlatformDataInput } from "../inputs/CompanyUpdateWithoutPlatformDataInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyUpdateWithWhereUniqueWithoutPlatformInput {
  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CompanyWhereUniqueInput;

  @TypeGraphQL.Field(_type => CompanyUpdateWithoutPlatformDataInput, {
    nullable: false,
    description: undefined
  })
  data!: CompanyUpdateWithoutPlatformDataInput;
}
