import * as TypeGraphQL from "type-graphql";
import { CompanyUpdateWithoutOwnerDataInput } from "../inputs/CompanyUpdateWithoutOwnerDataInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CompanyWhereUniqueInput;

  @TypeGraphQL.Field(_type => CompanyUpdateWithoutOwnerDataInput, {
    nullable: false,
    description: undefined
  })
  data!: CompanyUpdateWithoutOwnerDataInput;
}
