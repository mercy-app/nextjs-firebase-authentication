import * as TypeGraphQL from "type-graphql";
import { BookingUpdateManyWithoutRoomInput } from "../inputs/BookingUpdateManyWithoutRoomInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RoomUpdateWithoutProductDataInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  capacity?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  title?: string | null;

  @TypeGraphQL.Field(_type => BookingUpdateManyWithoutRoomInput, {
    nullable: true,
    description: undefined
  })
  bookings?: BookingUpdateManyWithoutRoomInput | null;
}
