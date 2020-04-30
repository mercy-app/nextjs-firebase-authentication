import * as TypeGraphQL from "type-graphql";
import { RoomWhereUniqueInput } from "../../../inputs/RoomWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneRoomArgs {
  @TypeGraphQL.Field(_type => RoomWhereUniqueInput, { nullable: false })
  where!: RoomWhereUniqueInput;
}
