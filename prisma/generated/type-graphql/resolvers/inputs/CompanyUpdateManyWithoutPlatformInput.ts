import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutPlatformInput } from "../inputs/CompanyCreateWithoutPlatformInput";
import { CompanyScalarWhereInput } from "../inputs/CompanyScalarWhereInput";
import { CompanyUpdateManyWithWhereNestedInput } from "../inputs/CompanyUpdateManyWithWhereNestedInput";
import { CompanyUpdateWithWhereUniqueWithoutPlatformInput } from "../inputs/CompanyUpdateWithWhereUniqueWithoutPlatformInput";
import { CompanyUpsertWithWhereUniqueWithoutPlatformInput } from "../inputs/CompanyUpsertWithWhereUniqueWithoutPlatformInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyUpdateManyWithoutPlatformInput {
  @TypeGraphQL.Field(_type => [CompanyCreateWithoutPlatformInput], {
    nullable: true,
    description: undefined
  })
  create?: CompanyCreateWithoutPlatformInput[] | null;

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

  @TypeGraphQL.Field(_type => [CompanyUpdateWithWhereUniqueWithoutPlatformInput], {
    nullable: true,
    description: undefined
  })
  update?: CompanyUpdateWithWhereUniqueWithoutPlatformInput[] | null;

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

  @TypeGraphQL.Field(_type => [CompanyUpsertWithWhereUniqueWithoutPlatformInput], {
    nullable: true,
    description: undefined
  })
  upsert?: CompanyUpsertWithWhereUniqueWithoutPlatformInput[] | null;
}
