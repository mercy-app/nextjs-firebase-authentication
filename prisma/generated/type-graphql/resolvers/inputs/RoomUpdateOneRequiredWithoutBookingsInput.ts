import * as TypeGraphQL from "type-graphql";
import { RoomCreateWithoutBookingsInput } from "../inputs/RoomCreateWithoutBookingsInput";
import { RoomUpdateWithoutBookingsDataInput } from "../inputs/RoomUpdateWithoutBookingsDataInput";
import { RoomUpsertWithoutBookingsInput } from "../inputs/RoomUpsertWithoutBookingsInput";
import { RoomWhereUniqueInput } from "../inputs/RoomWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RoomUpdateOneRequiredWithoutBookingsInput {
  @TypeGraphQL.Field(_type => RoomCreateWithoutBookingsInput, {
    nullable: true,
    description: undefined
  })
  create?: RoomCreateWithoutBookingsInput | null;

  @TypeGraphQL.Field(_type => RoomWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: RoomWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => RoomUpdateWithoutBookingsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: RoomUpdateWithoutBookingsDataInput | null;

  @TypeGraphQL.Field(_type => RoomUpsertWithoutBookingsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: RoomUpsertWithoutBookingsInput | null;
}
