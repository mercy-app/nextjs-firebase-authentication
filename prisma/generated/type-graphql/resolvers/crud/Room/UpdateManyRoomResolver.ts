import * as TypeGraphQL from "type-graphql";
import { UpdateManyRoomArgs } from "./args/UpdateManyRoomArgs";
import { Room } from "../../../models/Room";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Room)
export class UpdateManyRoomResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyRoomArgs): Promise<BatchPayload> {
    return ctx.prisma.room.updateMany(args);
  }
}
