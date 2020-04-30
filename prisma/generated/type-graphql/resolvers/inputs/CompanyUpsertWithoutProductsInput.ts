import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutProductsInput } from "../inputs/CompanyCreateWithoutProductsInput";
import { CompanyUpdateWithoutProductsDataInput } from "../inputs/CompanyUpdateWithoutProductsDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyUpsertWithoutProductsInput {
  @TypeGraphQL.Field(_type => CompanyUpdateWithoutProductsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CompanyUpdateWithoutProductsDataInput;

  @TypeGraphQL.Field(_type => CompanyCreateWithoutProductsInput, {
    nullable: false,
    description: undefined
  })
  create!: CompanyCreateWithoutProductsInput;
}
