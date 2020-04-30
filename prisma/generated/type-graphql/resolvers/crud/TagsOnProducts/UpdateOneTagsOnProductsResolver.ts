import * as TypeGraphQL from "type-graphql";
import { UpdateOneTagsOnProductsArgs } from "./args/UpdateOneTagsOnProductsArgs";
import { TagsOnProducts } from "../../../models/TagsOnProducts";

@TypeGraphQL.Resolver(_of => TagsOnProducts)
export class UpdateOneTagsOnProductsResolver {
  @TypeGraphQL.Mutation(_returns => TagsOnProducts, {
    nullable: true,
    description: undefined
  })
  async updateOneTagsOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneTagsOnProductsArgs): Promise<TagsOnProducts | null> {
    return ctx.prisma.tagsOnProducts.update(args);
  }
}
