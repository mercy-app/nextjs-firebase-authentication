import * as TypeGraphQL from "type-graphql";
import { FindOnePlatformArgs } from "./args/FindOnePlatformArgs";
import { Platform } from "../../../models/Platform";

@TypeGraphQL.Resolver(_of => Platform)
export class FindOnePlatformResolver {
  @TypeGraphQL.Query(_returns => Platform, {
    nullable: true,
    description: undefined
  })
  async platform(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOnePlatformArgs): Promise<Platform | null> {
    return ctx.prisma.platform.findOne(args);
  }
}
