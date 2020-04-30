import * as TypeGraphQL from "type-graphql";
import { RoomCreateWithoutBookingsInput } from "../inputs/RoomCreateWithoutBookingsInput";
import { RoomWhereUniqueInput } from "../inputs/RoomWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RoomCreateOneWithoutBookingsInput {
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
}
