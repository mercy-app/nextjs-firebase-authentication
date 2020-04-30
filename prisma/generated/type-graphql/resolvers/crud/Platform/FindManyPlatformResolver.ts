import * as TypeGraphQL from "type-graphql";
import { FindManyPlatformArgs } from "./args/FindManyPlatformArgs";
import { Platform } from "../../../models/Platform";

@TypeGraphQL.Resolver(_of => Platform)
export class FindManyPlatformResolver {
  @TypeGraphQL.Query(_returns => [Platform], {
    nullable: false,
    description: undefined
  })
  async platforms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyPlatformArgs): Promise<Platform[]> {
    return ctx.prisma.platform.findMany(args);
  }
}
