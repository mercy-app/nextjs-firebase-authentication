import * as TypeGraphQL from "type-graphql";
import { CreateOneRoomArgs } from "./args/CreateOneRoomArgs";
import { Room } from "../../../models/Room";

@TypeGraphQL.Resolver(_of => Room)
export class CreateOneRoomResolver {
  @TypeGraphQL.Mutation(_returns => Room, {
    nullable: false,
    description: undefined
  })
  async createOneRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneRoomArgs): Promise<Room> {
    return ctx.prisma.room.create(args);
  }
}
