import * as TypeGraphQL from "type-graphql";
import { BookingUpdaterecurringInput } from "../inputs/BookingUpdaterecurringInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class BookingUpdateWithoutRoomDataInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  bookingStart?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  bookingEnd?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  startHour?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  duration?: number | null;

  @TypeGraphQL.Field(_type => BookingUpdaterecurringInput, {
    nullable: true,
    description: undefined
  })
  recurring?: BookingUpdaterecurringInput | null;
}
