import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutContactInput } from "../inputs/CompanyCreateWithoutContactInput";
import { CompanyUpdateWithoutContactDataInput } from "../inputs/CompanyUpdateWithoutContactDataInput";
import { CompanyUpsertWithoutContactInput } from "../inputs/CompanyUpsertWithoutContactInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyUpdateOneWithoutContactInput {
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

  @TypeGraphQL.Field(_type => CompanyUpdateWithoutContactDataInput, {
    nullable: true,
    description: undefined
  })
  update?: CompanyUpdateWithoutContactDataInput | null;

  @TypeGraphQL.Field(_type => CompanyUpsertWithoutContactInput, {
    nullable: true,
    description: undefined
  })
  upsert?: CompanyUpsertWithoutContactInput | null;
}
