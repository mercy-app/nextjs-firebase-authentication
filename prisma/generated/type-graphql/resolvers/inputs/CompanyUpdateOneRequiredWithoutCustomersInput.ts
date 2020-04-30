import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutCustomersInput } from "../inputs/CompanyCreateWithoutCustomersInput";
import { CompanyUpdateWithoutCustomersDataInput } from "../inputs/CompanyUpdateWithoutCustomersDataInput";
import { CompanyUpsertWithoutCustomersInput } from "../inputs/CompanyUpsertWithoutCustomersInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyUpdateOneRequiredWithoutCustomersInput {
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

  @TypeGraphQL.Field(_type => CompanyUpdateWithoutCustomersDataInput, {
    nullable: true,
    description: undefined
  })
  update?: CompanyUpdateWithoutCustomersDataInput | null;

  @TypeGraphQL.Field(_type => CompanyUpsertWithoutCustomersInput, {
    nullable: true,
    description: undefined
  })
  upsert?: CompanyUpsertWithoutCustomersInput | null;
}
