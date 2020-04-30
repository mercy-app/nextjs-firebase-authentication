import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutOrderInput } from "../inputs/CompanyCreateWithoutOrderInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyCreateOneWithoutOrderInput {
  @TypeGraphQL.Field(_type => CompanyCreateWithoutOrderInput, {
    nullable: true,
    description: undefined
  })
  create?: CompanyCreateWithoutOrderInput | null;

  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: CompanyWhereUniqueInput | null;
}
