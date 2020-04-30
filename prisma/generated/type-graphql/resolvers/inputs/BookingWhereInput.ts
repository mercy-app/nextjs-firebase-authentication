import * as TypeGraphQL from "type-graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { RoomWhereInput } from "../inputs/RoomWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class BookingWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | null;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  bookingStart?: DateTimeFilter | null;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  bookingEnd?: DateTimeFilter | null;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  startHour?: IntFilter | null;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  duration?: IntFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  roomId?: StringFilter | null;

  @TypeGraphQL.Field(_type => [BookingWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: BookingWhereInput[] | null;

  @TypeGraphQL.Field(_type => [BookingWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: BookingWhereInput[] | null;

  @TypeGraphQL.Field(_type => [BookingWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: BookingWhereInput[] | null;

  @TypeGraphQL.Field(_type => RoomWhereInput, {
    nullable: true,
    description: undefined
  })
  room?: RoomWhereInput | null;
}
