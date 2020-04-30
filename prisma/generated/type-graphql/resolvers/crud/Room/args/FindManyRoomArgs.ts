import * as TypeGraphQL from "type-graphql";
import { RoomOrderByInput } from "../../../inputs/RoomOrderByInput";
import { RoomWhereInput } from "../../../inputs/RoomWhereInput";
import { RoomWhereUniqueInput } from "../../../inputs/RoomWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyRoomArgs {
  @TypeGraphQL.Field(_type => RoomWhereInput, { nullable: true })
  where?: RoomWhereInput | null;

  @TypeGraphQL.Field(_type => RoomOrderByInput, { nullable: true })
  orderBy?: RoomOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => RoomWhereUniqueInput, { nullable: true })
  after?: RoomWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => RoomWhereUniqueInput, { nullable: true })
  before?: RoomWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
