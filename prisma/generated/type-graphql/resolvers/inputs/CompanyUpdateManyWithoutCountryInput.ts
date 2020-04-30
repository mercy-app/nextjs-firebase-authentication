import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutCountryInput } from "../inputs/CompanyCreateWithoutCountryInput";
import { CompanyScalarWhereInput } from "../inputs/CompanyScalarWhereInput";
import { CompanyUpdateManyWithWhereNestedInput } from "../inputs/CompanyUpdateManyWithWhereNestedInput";
import { CompanyUpdateWithWhereUniqueWithoutCountryInput } from "../inputs/CompanyUpdateWithWhereUniqueWithoutCountryInput";
import { CompanyUpsertWithWhereUniqueWithoutCountryInput } from "../inputs/CompanyUpsertWithWhereUniqueWithoutCountryInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyUpdateManyWithoutCountryInput {
  @TypeGraphQL.Field(_type => [CompanyCreateWithoutCountryInput], {
    nullable: true,
    description: undefined
  })
  create?: CompanyCreateWithoutCountryInput[] | null;

  @TypeGraphQL.Field(_type => [CompanyWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CompanyWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [CompanyWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: CompanyWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [CompanyWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: CompanyWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [CompanyWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: CompanyWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [CompanyUpdateWithWhereUniqueWithoutCountryInput], {
    nullable: true,
    description: undefined
  })
  update?: CompanyUpdateWithWhereUniqueWithoutCountryInput[] | null;

  @TypeGraphQL.Field(_type => [CompanyUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: CompanyUpdateManyWithWhereNestedInput[] | null;

  @TypeGraphQL.Field(_type => [CompanyScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: CompanyScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CompanyUpsertWithWhereUniqueWithoutCountryInput], {
    nullable: true,
    description: undefined
  })
  upsert?: CompanyUpsertWithWhereUniqueWithoutCountryInput[] | null;
}
