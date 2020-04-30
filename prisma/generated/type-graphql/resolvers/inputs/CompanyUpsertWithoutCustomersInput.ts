import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutCustomersInput } from "../inputs/CompanyCreateWithoutCustomersInput";
import { CompanyUpdateWithoutCustomersDataInput } from "../inputs/CompanyUpdateWithoutCustomersDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyUpsertWithoutCustomersInput {
  @TypeGraphQL.Field(_type => CompanyUpdateWithoutCustomersDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CompanyUpdateWithoutCustomersDataInput;

  @TypeGraphQL.Field(_type => CompanyCreateWithoutCustomersInput, {
    nullable: false,
    description: undefined
  })
  create!: CompanyCreateWithoutCustomersInput;
}
