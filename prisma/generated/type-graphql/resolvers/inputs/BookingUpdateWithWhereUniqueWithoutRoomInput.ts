import * as TypeGraphQL from "type-graphql";
import { BookingUpdateWithoutRoomDataInput } from "../inputs/BookingUpdateWithoutRoomDataInput";
import { BookingWhereUniqueInput } from "../inputs/BookingWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class BookingUpdateWithWhereUniqueWithoutRoomInput {
  @TypeGraphQL.Field(_type => BookingWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: BookingWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookingUpdateWithoutRoomDataInput, {
    nullable: false,
    description: undefined
  })
  data!: BookingUpdateWithoutRoomDataInput;
}
