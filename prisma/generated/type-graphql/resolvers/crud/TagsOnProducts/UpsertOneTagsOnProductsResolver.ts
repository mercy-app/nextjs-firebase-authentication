import * as TypeGraphQL from "type-graphql";
import { UpsertOneTagsOnProductsArgs } from "./args/UpsertOneTagsOnProductsArgs";
import { TagsOnProducts } from "../../../models/TagsOnProducts";

@TypeGraphQL.Resolver(_of => TagsOnProducts)
export class UpsertOneTagsOnProductsResolver {
  @TypeGraphQL.Mutation(_returns => TagsOnProducts, {
    nullable: false,
    description: undefined
  })
  async upsertOneTagsOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneTagsOnProductsArgs): Promise<TagsOnProducts> {
    return ctx.prisma.tagsOnProducts.upsert(args);
  }
}
