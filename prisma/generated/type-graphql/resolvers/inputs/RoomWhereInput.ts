import * as TypeGraphQL from "type-graphql";
import { BookingFilter } from "../inputs/BookingFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProductWhereInput } from "../inputs/ProductWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RoomWhereInput {
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

  @TypeGraphQL.Field(_type => [RoomWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: RoomWhereInput[] | null;

  @TypeGraphQL.Field(_type => [RoomWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: RoomWhereInput[] | null;

  @TypeGraphQL.Field(_type => [RoomWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: RoomWhereInput[] | null;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true,
    description: undefined
  })
  product?: ProductWhereInput | null;
}
