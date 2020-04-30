import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutContactInput } from "../inputs/CompanyCreateWithoutContactInput";
import { CompanyUpdateWithoutContactDataInput } from "../inputs/CompanyUpdateWithoutContactDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyUpsertWithoutContactInput {
  @TypeGraphQL.Field(_type => CompanyUpdateWithoutContactDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CompanyUpdateWithoutContactDataInput;

  @TypeGraphQL.Field(_type => CompanyCreateWithoutContactInput, {
    nullable: false,
    description: undefined
  })
  create!: CompanyCreateWithoutContactInput;
}
