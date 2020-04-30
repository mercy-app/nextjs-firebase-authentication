import * as TypeGraphQL from "type-graphql";
import { RoomCreateWithoutBookingsInput } from "../inputs/RoomCreateWithoutBookingsInput";
import { RoomUpdateWithoutBookingsDataInput } from "../inputs/RoomUpdateWithoutBookingsDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RoomUpsertWithoutBookingsInput {
  @TypeGraphQL.Field(_type => RoomUpdateWithoutBookingsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: RoomUpdateWithoutBookingsDataInput;

  @TypeGraphQL.Field(_type => RoomCreateWithoutBookingsInput, {
    nullable: false,
    description: undefined
  })
  create!: RoomCreateWithoutBookingsInput;
}
