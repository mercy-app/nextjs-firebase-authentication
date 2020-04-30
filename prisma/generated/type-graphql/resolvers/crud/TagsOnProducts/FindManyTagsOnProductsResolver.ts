import * as TypeGraphQL from "type-graphql";
import { FindManyTagsOnProductsArgs } from "./args/FindManyTagsOnProductsArgs";
import { TagsOnProducts } from "../../../models/TagsOnProducts";

@TypeGraphQL.Resolver(_of => TagsOnProducts)
export class FindManyTagsOnProductsResolver {
  @TypeGraphQL.Query(_returns => [TagsOnProducts], {
    nullable: false,
    description: undefined
  })
  async tagsOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTagsOnProductsArgs): Promise<TagsOnProducts[]> {
    return ctx.prisma.tagsOnProducts.findMany(args);
  }
}
