import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutAddressInput } from "../inputs/CompanyCreateWithoutAddressInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyCreateOneWithoutAddressInput {
  @TypeGraphQL.Field(_type => CompanyCreateWithoutAddressInput, {
    nullable: true,
    description: undefined
  })
  create?: CompanyCreateWithoutAddressInput | null;

  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: CompanyWhereUniqueInput | null;
}
