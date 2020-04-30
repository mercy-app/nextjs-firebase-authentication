import * as TypeGraphQL from "type-graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class BookingScalarWhereInput {
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

  @TypeGraphQL.Field(_type => [BookingScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: BookingScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [BookingScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: BookingScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [BookingScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: BookingScalarWhereInput[] | null;
}
