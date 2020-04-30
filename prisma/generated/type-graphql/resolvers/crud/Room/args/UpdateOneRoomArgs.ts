import * as TypeGraphQL from "type-graphql";
import { RoomUpdateInput } from "../../../inputs/RoomUpdateInput";
import { RoomWhereUniqueInput } from "../../../inputs/RoomWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneRoomArgs {
  @TypeGraphQL.Field(_type => RoomUpdateInput, { nullable: false })
  data!: RoomUpdateInput;

  @TypeGraphQL.Field(_type => RoomWhereUniqueInput, { nullable: false })
  where!: RoomWhereUniqueInput;
}
