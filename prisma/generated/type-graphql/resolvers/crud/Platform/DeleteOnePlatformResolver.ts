import * as TypeGraphQL from "type-graphql";
import { DeleteOnePlatformArgs } from "./args/DeleteOnePlatformArgs";
import { Platform } from "../../../models/Platform";

@TypeGraphQL.Resolver(_of => Platform)
export class DeleteOnePlatformResolver {
  @TypeGraphQL.Mutation(_returns => Platform, {
    nullable: true,
    description: undefined
  })
  async deleteOnePlatform(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOnePlatformArgs): Promise<Platform | null> {
    return ctx.prisma.platform.delete(args);
  }
}
