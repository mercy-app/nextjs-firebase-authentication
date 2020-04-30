import * as TypeGraphQL from "type-graphql";
import { RoomCreateWithoutProductInput } from "../inputs/RoomCreateWithoutProductInput";
import { RoomUpdateWithoutProductDataInput } from "../inputs/RoomUpdateWithoutProductDataInput";
import { RoomWhereUniqueInput } from "../inputs/RoomWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RoomUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => RoomWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: RoomWhereUniqueInput;

  @TypeGraphQL.Field(_type => RoomUpdateWithoutProductDataInput, {
    nullable: false,
    description: undefined
  })
  update!: RoomUpdateWithoutProductDataInput;

  @TypeGraphQL.Field(_type => RoomCreateWithoutProductInput, {
    nullable: false,
    description: undefined
  })
  create!: RoomCreateWithoutProductInput;
}
