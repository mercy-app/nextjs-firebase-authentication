import * as TypeGraphQL from "type-graphql";
import { UpdateManyPlatformArgs } from "./args/UpdateManyPlatformArgs";
import { Platform } from "../../../models/Platform";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Platform)
export class UpdateManyPlatformResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyPlatform(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyPlatformArgs): Promise<BatchPayload> {
    return ctx.prisma.platform.updateMany(args);
  }
}
