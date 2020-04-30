import * as TypeGraphQL from "type-graphql";
import { CreateOnePlatformArgs } from "./args/CreateOnePlatformArgs";
import { Platform } from "../../../models/Platform";

@TypeGraphQL.Resolver(_of => Platform)
export class CreateOnePlatformResolver {
  @TypeGraphQL.Mutation(_returns => Platform, {
    nullable: false,
    description: undefined
  })
  async createOnePlatform(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOnePlatformArgs): Promise<Platform> {
    return ctx.prisma.platform.create(args);
  }
}
