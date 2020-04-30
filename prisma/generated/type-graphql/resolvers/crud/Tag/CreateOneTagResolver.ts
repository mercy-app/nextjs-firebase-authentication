import * as TypeGraphQL from "type-graphql";
import { CreateOneTagArgs } from "./args/CreateOneTagArgs";
import { Tag } from "../../../models/Tag";

@TypeGraphQL.Resolver(_of => Tag)
export class CreateOneTagResolver {
  @TypeGraphQL.Mutation(_returns => Tag, {
    nullable: false,
    description: undefined
  })
  async createOneTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneTagArgs): Promise<Tag> {
    return ctx.prisma.tag.create(args);
  }
}
