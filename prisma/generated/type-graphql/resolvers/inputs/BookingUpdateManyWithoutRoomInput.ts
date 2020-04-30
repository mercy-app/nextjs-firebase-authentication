import * as TypeGraphQL from "type-graphql";
import { BookingCreateWithoutRoomInput } from "../inputs/BookingCreateWithoutRoomInput";
import { BookingScalarWhereInput } from "../inputs/BookingScalarWhereInput";
import { BookingUpdateManyWithWhereNestedInput } from "../inputs/BookingUpdateManyWithWhereNestedInput";
import { BookingUpdateWithWhereUniqueWithoutRoomInput } from "../inputs/BookingUpdateWithWhereUniqueWithoutRoomInput";
import { BookingUpsertWithWhereUniqueWithoutRoomInput } from "../inputs/BookingUpsertWithWhereUniqueWithoutRoomInput";
import { BookingWhereUniqueInput } from "../inputs/BookingWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class BookingUpdateManyWithoutRoomInput {
  @TypeGraphQL.Field(_type => [BookingCreateWithoutRoomInput], {
    nullable: true,
    description: undefined
  })
  create?: BookingCreateWithoutRoomInput[] | null;

  @TypeGraphQL.Field(_type => [BookingWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: BookingWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [BookingWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: BookingWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [BookingWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: BookingWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [BookingWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: BookingWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [BookingUpdateWithWhereUniqueWithoutRoomInput], {
    nullable: true,
    description: undefined
  })
  update?: BookingUpdateWithWhereUniqueWithoutRoomInput[] | null;

  @TypeGraphQL.Field(_type => [BookingUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: BookingUpdateManyWithWhereNestedInput[] | null;

  @TypeGraphQL.Field(_type => [BookingScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: BookingScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [BookingUpsertWithWhereUniqueWithoutRoomInput], {
    nullable: true,
    description: undefined
  })
  upsert?: BookingUpsertWithWhereUniqueWithoutRoomInput[] | null;
}
