import * as TypeGraphQL from "type-graphql";
import { UpsertOnePlatformArgs } from "./args/UpsertOnePlatformArgs";
import { Platform } from "../../../models/Platform";

@TypeGraphQL.Resolver(_of => Platform)
export class UpsertOnePlatformResolver {
  @TypeGraphQL.Mutation(_returns => Platform, {
    nullable: false,
    description: undefined
  })
  async upsertOnePlatform(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOnePlatformArgs): Promise<Platform> {
    return ctx.prisma.platform.upsert(args);
  }
}
