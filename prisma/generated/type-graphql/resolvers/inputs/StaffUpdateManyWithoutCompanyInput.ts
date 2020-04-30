import * as TypeGraphQL from "type-graphql";
import { StaffCreateWithoutCompanyInput } from "../inputs/StaffCreateWithoutCompanyInput";
import { StaffScalarWhereInput } from "../inputs/StaffScalarWhereInput";
import { StaffUpdateManyWithWhereNestedInput } from "../inputs/StaffUpdateManyWithWhereNestedInput";
import { StaffUpdateWithWhereUniqueWithoutCompanyInput } from "../inputs/StaffUpdateWithWhereUniqueWithoutCompanyInput";
import { StaffUpsertWithWhereUniqueWithoutCompanyInput } from "../inputs/StaffUpsertWithWhereUniqueWithoutCompanyInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StaffUpdateManyWithoutCompanyInput {
  @TypeGraphQL.Field(_type => [StaffCreateWithoutCompanyInput], {
    nullable: true,
    description: undefined
  })
  create?: StaffCreateWithoutCompanyInput[] | null;

  @TypeGraphQL.Field(_type => [StaffWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: StaffWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [StaffWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: StaffWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [StaffWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: StaffWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [StaffWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: StaffWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [StaffUpdateWithWhereUniqueWithoutCompanyInput], {
    nullable: true,
    description: undefined
  })
  update?: StaffUpdateWithWhereUniqueWithoutCompanyInput[] | null;

  @TypeGraphQL.Field(_type => [StaffUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: StaffUpdateManyWithWhereNestedInput[] | null;

  @TypeGraphQL.Field(_type => [StaffScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: StaffScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [StaffUpsertWithWhereUniqueWithoutCompanyInput], {
    nullable: true,
    description: undefined
  })
  upsert?: StaffUpsertWithWhereUniqueWithoutCompanyInput[] | null;
}
