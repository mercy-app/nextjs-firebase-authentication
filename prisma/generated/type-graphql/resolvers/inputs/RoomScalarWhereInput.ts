import * as TypeGraphQL from "type-graphql";
import { BookingFilter } from "../inputs/BookingFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RoomScalarWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | null;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  capacity?: IntFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  productId?: StringFilter | null;

  @TypeGraphQL.Field(_type => BookingFilter, {
    nullable: true,
    description: undefined
  })
  bookings?: BookingFilter | null;

  @TypeGraphQL.Field(_type => [RoomScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: RoomScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [RoomScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: RoomScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [RoomScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: RoomScalarWhereInput[] | null;
}
