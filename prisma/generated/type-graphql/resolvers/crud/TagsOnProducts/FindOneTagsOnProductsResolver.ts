import * as TypeGraphQL from "type-graphql";
import { FindOneTagsOnProductsArgs } from "./args/FindOneTagsOnProductsArgs";
import { TagsOnProducts } from "../../../models/TagsOnProducts";

@TypeGraphQL.Resolver(_of => TagsOnProducts)
export class FindOneTagsOnProductsResolver {
  @TypeGraphQL.Query(_returns => TagsOnProducts, {
    nullable: true,
    description: undefined
  })
  async tagsOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneTagsOnProductsArgs): Promise<TagsOnProducts | null> {
    return ctx.prisma.tagsOnProducts.findOne(args);
  }
}
