import * as TypeGraphQL from "type-graphql";
import { DeleteManyRoomArgs } from "./args/DeleteManyRoomArgs";
import { Room } from "../../../models/Room";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Room)
export class DeleteManyRoomResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyRoomArgs): Promise<BatchPayload> {
    return ctx.prisma.room.deleteMany(args);
  }
}
