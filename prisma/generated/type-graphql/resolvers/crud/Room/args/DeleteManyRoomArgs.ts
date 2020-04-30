import * as TypeGraphQL from "type-graphql";
import { RoomWhereInput } from "../../../inputs/RoomWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRoomArgs {
  @TypeGraphQL.Field(_type => RoomWhereInput, { nullable: true })
  where?: RoomWhereInput | null;
}
