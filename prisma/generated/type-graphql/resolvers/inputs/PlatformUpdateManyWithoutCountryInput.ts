import * as TypeGraphQL from "type-graphql";
import { PlatformCreateWithoutCountryInput } from "../inputs/PlatformCreateWithoutCountryInput";
import { PlatformScalarWhereInput } from "../inputs/PlatformScalarWhereInput";
import { PlatformUpdateManyWithWhereNestedInput } from "../inputs/PlatformUpdateManyWithWhereNestedInput";
import { PlatformUpdateWithWhereUniqueWithoutCountryInput } from "../inputs/PlatformUpdateWithWhereUniqueWithoutCountryInput";
import { PlatformUpsertWithWhereUniqueWithoutCountryInput } from "../inputs/PlatformUpsertWithWhereUniqueWithoutCountryInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PlatformUpdateManyWithoutCountryInput {
  @TypeGraphQL.Field(_type => [PlatformCreateWithoutCountryInput], {
    nullable: true,
    description: undefined
  })
  create?: PlatformCreateWithoutCountryInput[] | null;

  @TypeGraphQL.Field(_type => [PlatformWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: PlatformWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [PlatformWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: PlatformWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [PlatformWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: PlatformWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [PlatformWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: PlatformWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [PlatformUpdateWithWhereUniqueWithoutCountryInput], {
    nullable: true,
    description: undefined
  })
  update?: PlatformUpdateWithWhereUniqueWithoutCountryInput[] | null;

  @TypeGraphQL.Field(_type => [PlatformUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: PlatformUpdateManyWithWhereNestedInput[] | null;

  @TypeGraphQL.Field(_type => [PlatformScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: PlatformScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [PlatformUpsertWithWhereUniqueWithoutCountryInput], {
    nullable: true,
    description: undefined
  })
  upsert?: PlatformUpsertWithWhereUniqueWithoutCountryInput[] | null;
}
