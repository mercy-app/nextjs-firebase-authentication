import * as TypeGraphQL from "type-graphql";
import { FindManyRoomArgs } from "./args/FindManyRoomArgs";
import { Room } from "../../../models/Room";

@TypeGraphQL.Resolver(_of => Room)
export class FindManyRoomResolver {
  @TypeGraphQL.Query(_returns => [Room], {
    nullable: false,
    description: undefined
  })
  async rooms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyRoomArgs): Promise<Room[]> {
    return ctx.prisma.room.findMany(args);
  }
}
