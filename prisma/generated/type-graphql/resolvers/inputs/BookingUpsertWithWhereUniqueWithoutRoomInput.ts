import * as TypeGraphQL from "type-graphql";
import { BookingCreateWithoutRoomInput } from "../inputs/BookingCreateWithoutRoomInput";
import { BookingUpdateWithoutRoomDataInput } from "../inputs/BookingUpdateWithoutRoomDataInput";
import { BookingWhereUniqueInput } from "../inputs/BookingWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class BookingUpsertWithWhereUniqueWithoutRoomInput {
  @TypeGraphQL.Field(_type => BookingWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: BookingWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookingUpdateWithoutRoomDataInput, {
    nullable: false,
    description: undefined
  })
  update!: BookingUpdateWithoutRoomDataInput;

  @TypeGraphQL.Field(_type => BookingCreateWithoutRoomInput, {
    nullable: false,
    description: undefined
  })
  create!: BookingCreateWithoutRoomInput;
}
