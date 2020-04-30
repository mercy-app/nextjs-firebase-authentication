import * as TypeGraphQL from "type-graphql";
import { BookingCreateWithoutRoomInput } from "../inputs/BookingCreateWithoutRoomInput";
import { BookingWhereUniqueInput } from "../inputs/BookingWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class BookingCreateManyWithoutRoomInput {
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
}
