import * as TypeGraphQL from "type-graphql";
import { UpdateOneRoomArgs } from "./args/UpdateOneRoomArgs";
import { Room } from "../../../models/Room";

@TypeGraphQL.Resolver(_of => Room)
export class UpdateOneRoomResolver {
  @TypeGraphQL.Mutation(_returns => Room, {
    nullable: true,
    description: undefined
  })
  async updateOneRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneRoomArgs): Promise<Room | null> {
    return ctx.prisma.room.update(args);
  }
}
