import * as TypeGraphQL from "type-graphql";
import { UpsertOneRoomArgs } from "./args/UpsertOneRoomArgs";
import { Room } from "../../../models/Room";

@TypeGraphQL.Resolver(_of => Room)
export class UpsertOneRoomResolver {
  @TypeGraphQL.Mutation(_returns => Room, {
    nullable: false,
    description: undefined
  })
  async upsertOneRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneRoomArgs): Promise<Room> {
    return ctx.prisma.room.upsert(args);
  }
}
