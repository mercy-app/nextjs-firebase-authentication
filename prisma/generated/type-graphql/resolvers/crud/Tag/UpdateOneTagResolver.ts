import * as TypeGraphQL from "type-graphql";
import { UpdateOneTagArgs } from "./args/UpdateOneTagArgs";
import { Tag } from "../../../models/Tag";

@TypeGraphQL.Resolver(_of => Tag)
export class UpdateOneTagResolver {
  @TypeGraphQL.Mutation(_returns => Tag, {
    nullable: true,
    description: undefined
  })
  async updateOneTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneTagArgs): Promise<Tag | null> {
    return ctx.prisma.tag.update(args);
  }
}
