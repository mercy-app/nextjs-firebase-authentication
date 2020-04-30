import * as TypeGraphQL from "type-graphql";
import { BookingCreaterecurringInput } from "../inputs/BookingCreaterecurringInput";
import { RoomCreateOneWithoutBookingsInput } from "../inputs/RoomCreateOneWithoutBookingsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class BookingCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined
  })
  bookingStart!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined
  })
  bookingEnd!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  startHour!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  duration!: number;

  @TypeGraphQL.Field(_type => BookingCreaterecurringInput, {
    nullable: true,
    description: undefined
  })
  recurring?: BookingCreaterecurringInput | null;

  @TypeGraphQL.Field(_type => RoomCreateOneWithoutBookingsInput, {
    nullable: false,
    description: undefined
  })
  room!: RoomCreateOneWithoutBookingsInput;
}
