import * as TypeGraphQL from "type-graphql";
import { Room } from "../../../models/Room";
import { AggregateRoom } from "../../outputs/AggregateRoom";

@TypeGraphQL.Resolver(_of => Room)
export class AggregateRoomResolver {
  @TypeGraphQL.Query(_returns => AggregateRoom, {
    nullable: false,
    description: undefined
  })
  async aggregateRoom(): Promise<AggregateRoom> {
    return new AggregateRoom();
  }
}
