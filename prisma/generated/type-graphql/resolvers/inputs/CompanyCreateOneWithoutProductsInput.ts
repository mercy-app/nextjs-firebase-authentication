import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutProductsInput } from "../inputs/CompanyCreateWithoutProductsInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyCreateOneWithoutProductsInput {
  @TypeGraphQL.Field(_type => CompanyCreateWithoutProductsInput, {
    nullable: true,
    description: undefined
  })
  create?: CompanyCreateWithoutProductsInput | null;

  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: CompanyWhereUniqueInput | null;
}
