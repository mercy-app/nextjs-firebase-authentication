import * as TypeGraphQL from "type-graphql";
import { FindOneRoomArgs } from "./args/FindOneRoomArgs";
import { Room } from "../../../models/Room";

@TypeGraphQL.Resolver(_of => Room)
export class FindOneRoomResolver {
  @TypeGraphQL.Query(_returns => Room, {
    nullable: true,
    description: undefined
  })
  async room(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneRoomArgs): Promise<Room | null> {
    return ctx.prisma.room.findOne(args);
  }
}
