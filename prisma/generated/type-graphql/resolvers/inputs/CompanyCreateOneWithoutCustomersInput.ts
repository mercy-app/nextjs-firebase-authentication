import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutCustomersInput } from "../inputs/CompanyCreateWithoutCustomersInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyCreateOneWithoutCustomersInput {
  @TypeGraphQL.Field(_type => CompanyCreateWithoutCustomersInput, {
    nullable: true,
    description: undefined
  })
  create?: CompanyCreateWithoutCustomersInput | null;

  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: CompanyWhereUniqueInput | null;
}
