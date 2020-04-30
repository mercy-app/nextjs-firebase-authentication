import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutOwnerInput } from "../inputs/CompanyCreateWithoutOwnerInput";
import { CompanyUpdateWithoutOwnerDataInput } from "../inputs/CompanyUpdateWithoutOwnerDataInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CompanyWhereUniqueInput;

  @TypeGraphQL.Field(_type => CompanyUpdateWithoutOwnerDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CompanyUpdateWithoutOwnerDataInput;

  @TypeGraphQL.Field(_type => CompanyCreateWithoutOwnerInput, {
    nullable: false,
    description: undefined
  })
  create!: CompanyCreateWithoutOwnerInput;
}
