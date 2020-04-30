import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutOwnerInput } from "../inputs/CompanyCreateWithoutOwnerInput";
import { CompanyScalarWhereInput } from "../inputs/CompanyScalarWhereInput";
import { CompanyUpdateManyWithWhereNestedInput } from "../inputs/CompanyUpdateManyWithWhereNestedInput";
import { CompanyUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/CompanyUpdateWithWhereUniqueWithoutOwnerInput";
import { CompanyUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/CompanyUpsertWithWhereUniqueWithoutOwnerInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyUpdateManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [CompanyCreateWithoutOwnerInput], {
    nullable: true,
    description: undefined
  })
  create?: CompanyCreateWithoutOwnerInput[] | null;

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

  @TypeGraphQL.Field(_type => [CompanyUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true,
    description: undefined
  })
  update?: CompanyUpdateWithWhereUniqueWithoutOwnerInput[] | null;

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

  @TypeGraphQL.Field(_type => [CompanyUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true,
    description: undefined
  })
  upsert?: CompanyUpsertWithWhereUniqueWithoutOwnerInput[] | null;
}
