import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutAddressInput } from "../inputs/CompanyCreateWithoutAddressInput";
import { CompanyUpdateWithoutAddressDataInput } from "../inputs/CompanyUpdateWithoutAddressDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyUpsertWithoutAddressInput {
  @TypeGraphQL.Field(_type => CompanyUpdateWithoutAddressDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CompanyUpdateWithoutAddressDataInput;

  @TypeGraphQL.Field(_type => CompanyCreateWithoutAddressInput, {
    nullable: false,
    description: undefined
  })
  create!: CompanyCreateWithoutAddressInput;
}
