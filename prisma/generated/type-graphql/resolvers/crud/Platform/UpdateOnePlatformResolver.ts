import * as TypeGraphQL from "type-graphql";
import { UpdateOnePlatformArgs } from "./args/UpdateOnePlatformArgs";
import { Platform } from "../../../models/Platform";

@TypeGraphQL.Resolver(_of => Platform)
export class UpdateOnePlatformResolver {
  @TypeGraphQL.Mutation(_returns => Platform, {
    nullable: true,
    description: undefined
  })
  async updateOnePlatform(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOnePlatformArgs): Promise<Platform | null> {
    return ctx.prisma.platform.update(args);
  }
}
