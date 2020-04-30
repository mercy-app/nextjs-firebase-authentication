import * as TypeGraphQL from "type-graphql";
import { FindManyTagArgs } from "./args/FindManyTagArgs";
import { Tag } from "../../../models/Tag";

@TypeGraphQL.Resolver(_of => Tag)
export class FindManyTagResolver {
  @TypeGraphQL.Query(_returns => [Tag], {
    nullable: false,
    description: undefined
  })
  async tags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTagArgs): Promise<Tag[]> {
    return ctx.prisma.tag.findMany(args);
  }
}
