import * as TypeGraphQL from "type-graphql";
import { DeleteOneTagsOnProductsArgs } from "./args/DeleteOneTagsOnProductsArgs";
import { TagsOnProducts } from "../../../models/TagsOnProducts";

@TypeGraphQL.Resolver(_of => TagsOnProducts)
export class DeleteOneTagsOnProductsResolver {
  @TypeGraphQL.Mutation(_returns => TagsOnProducts, {
    nullable: true,
    description: undefined
  })
  async deleteOneTagsOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneTagsOnProductsArgs): Promise<TagsOnProducts | null> {
    return ctx.prisma.tagsOnProducts.delete(args);
  }
}
