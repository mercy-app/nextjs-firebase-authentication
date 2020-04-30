import * as TypeGraphQL from "type-graphql";
import { RoomCreateInput } from "../../../inputs/RoomCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneRoomArgs {
  @TypeGraphQL.Field(_type => RoomCreateInput, { nullable: false })
  data!: RoomCreateInput;
}
