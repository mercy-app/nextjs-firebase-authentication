import * as TypeGraphQL from "type-graphql";
import { StaffCreateWithoutUserInput } from "../inputs/StaffCreateWithoutUserInput";
import { StaffScalarWhereInput } from "../inputs/StaffScalarWhereInput";
import { StaffUpdateManyWithWhereNestedInput } from "../inputs/StaffUpdateManyWithWhereNestedInput";
import { StaffUpdateWithWhereUniqueWithoutUserInput } from "../inputs/StaffUpdateWithWhereUniqueWithoutUserInput";
import { StaffUpsertWithWhereUniqueWithoutUserInput } from "../inputs/StaffUpsertWithWhereUniqueWithoutUserInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StaffUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [StaffCreateWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  create?: StaffCreateWithoutUserInput[] | null;

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

  @TypeGraphQL.Field(_type => [StaffUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  update?: StaffUpdateWithWhereUniqueWithoutUserInput[] | null;

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

  @TypeGraphQL.Field(_type => [StaffUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  upsert?: StaffUpsertWithWhereUniqueWithoutUserInput[] | null;
}
