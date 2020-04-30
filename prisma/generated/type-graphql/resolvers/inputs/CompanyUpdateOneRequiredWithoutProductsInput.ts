import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutProductsInput } from "../inputs/CompanyCreateWithoutProductsInput";
import { CompanyUpdateWithoutProductsDataInput } from "../inputs/CompanyUpdateWithoutProductsDataInput";
import { CompanyUpsertWithoutProductsInput } from "../inputs/CompanyUpsertWithoutProductsInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyUpdateOneRequiredWithoutProductsInput {
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

  @TypeGraphQL.Field(_type => CompanyUpdateWithoutProductsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: CompanyUpdateWithoutProductsDataInput | null;

  @TypeGraphQL.Field(_type => CompanyUpsertWithoutProductsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: CompanyUpsertWithoutProductsInput | null;
}
