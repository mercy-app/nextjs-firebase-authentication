import * as TypeGraphQL from "type-graphql";
import { DeleteOneTagArgs } from "./args/DeleteOneTagArgs";
import { Tag } from "../../../models/Tag";

@TypeGraphQL.Resolver(_of => Tag)
export class DeleteOneTagResolver {
  @TypeGraphQL.Mutation(_returns => Tag, {
    nullable: true,
    description: undefined
  })
  async deleteOneTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneTagArgs): Promise<Tag | null> {
    return ctx.prisma.tag.delete(args);
  }
}
