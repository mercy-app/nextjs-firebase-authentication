import * as TypeGraphQL from "type-graphql";
import { DeleteManyPlatformArgs } from "./args/DeleteManyPlatformArgs";
import { Platform } from "../../../models/Platform";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Platform)
export class DeleteManyPlatformResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyPlatform(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyPlatformArgs): Promise<BatchPayload> {
    return ctx.prisma.platform.deleteMany(args);
  }
}
