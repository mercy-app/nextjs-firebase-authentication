import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutAddressInput } from "../inputs/CompanyCreateWithoutAddressInput";
import { CompanyUpdateWithoutAddressDataInput } from "../inputs/CompanyUpdateWithoutAddressDataInput";
import { CompanyUpsertWithoutAddressInput } from "../inputs/CompanyUpsertWithoutAddressInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyUpdateOneWithoutAddressInput {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  disconnect?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  delete?: boolean | null;

  @TypeGraphQL.Field(_type => CompanyUpdateWithoutAddressDataInput, {
    nullable: true,
    description: undefined
  })
  update?: CompanyUpdateWithoutAddressDataInput | null;

  @TypeGraphQL.Field(_type => CompanyUpsertWithoutAddressInput, {
    nullable: true,
    description: undefined
  })
  upsert?: CompanyUpsertWithoutAddressInput | null;
}
