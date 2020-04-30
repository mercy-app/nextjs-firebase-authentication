import * as TypeGraphQL from "type-graphql";
import { DeleteOneRoomArgs } from "./args/DeleteOneRoomArgs";
import { Room } from "../../../models/Room";

@TypeGraphQL.Resolver(_of => Room)
export class DeleteOneRoomResolver {
  @TypeGraphQL.Mutation(_returns => Room, {
    nullable: true,
    description: undefined
  })
  async deleteOneRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneRoomArgs): Promise<Room | null> {
    return ctx.prisma.room.delete(args);
  }
}
