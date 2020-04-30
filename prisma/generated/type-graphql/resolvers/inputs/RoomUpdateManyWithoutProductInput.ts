import * as TypeGraphQL from "type-graphql";
import { RoomCreateWithoutProductInput } from "../inputs/RoomCreateWithoutProductInput";
import { RoomScalarWhereInput } from "../inputs/RoomScalarWhereInput";
import { RoomUpdateManyWithWhereNestedInput } from "../inputs/RoomUpdateManyWithWhereNestedInput";
import { RoomUpdateWithWhereUniqueWithoutProductInput } from "../inputs/RoomUpdateWithWhereUniqueWithoutProductInput";
import { RoomUpsertWithWhereUniqueWithoutProductInput } from "../inputs/RoomUpsertWithWhereUniqueWithoutProductInput";
import { RoomWhereUniqueInput } from "../inputs/RoomWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RoomUpdateManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [RoomCreateWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  create?: RoomCreateWithoutProductInput[] | null;

  @TypeGraphQL.Field(_type => [RoomWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: RoomWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [RoomWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: RoomWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [RoomWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: RoomWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [RoomWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: RoomWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [RoomUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  update?: RoomUpdateWithWhereUniqueWithoutProductInput[] | null;

  @TypeGraphQL.Field(_type => [RoomUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: RoomUpdateManyWithWhereNestedInput[] | null;

  @TypeGraphQL.Field(_type => [RoomScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: RoomScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [RoomUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  upsert?: RoomUpsertWithWhereUniqueWithoutProductInput[] | null;
}
