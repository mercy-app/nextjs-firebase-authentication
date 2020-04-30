import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutContactInput } from "../inputs/CompanyCreateWithoutContactInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyCreateOneWithoutContactInput {
  @TypeGraphQL.Field(_type => CompanyCreateWithoutContactInput, {
    nullable: true,
    description: undefined
  })
  create?: CompanyCreateWithoutContactInput | null;

  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: CompanyWhereUniqueInput | null;
}
