import * as TypeGraphQL from "type-graphql";
import { FindOneTagArgs } from "./args/FindOneTagArgs";
import { Tag } from "../../../models/Tag";

@TypeGraphQL.Resolver(_of => Tag)
export class FindOneTagResolver {
  @TypeGraphQL.Query(_returns => Tag, {
    nullable: true,
    description: undefined
  })
  async tag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneTagArgs): Promise<Tag | null> {
    return ctx.prisma.tag.findOne(args);
  }
}
