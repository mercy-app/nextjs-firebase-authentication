import * as TypeGraphQL from "type-graphql";
import { BookingCreateManyWithoutRoomInput } from "../inputs/BookingCreateManyWithoutRoomInput";
import { ProductCreateOneWithoutRoomInput } from "../inputs/ProductCreateOneWithoutRoomInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RoomCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  capacity!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @TypeGraphQL.Field(_type => ProductCreateOneWithoutRoomInput, {
    nullable: false,
    description: undefined
  })
  product!: ProductCreateOneWithoutRoomInput;

  @TypeGraphQL.Field(_type => BookingCreateManyWithoutRoomInput, {
    nullable: true,
    description: undefined
  })
  bookings?: BookingCreateManyWithoutRoomInput | null;
}
