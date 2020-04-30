import * as TypeGraphQL from "type-graphql";
import { CreateOneTagsOnProductsArgs } from "./args/CreateOneTagsOnProductsArgs";
import { TagsOnProducts } from "../../../models/TagsOnProducts";

@TypeGraphQL.Resolver(_of => TagsOnProducts)
export class CreateOneTagsOnProductsResolver {
  @TypeGraphQL.Mutation(_returns => TagsOnProducts, {
    nullable: false,
    description: undefined
  })
  async createOneTagsOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneTagsOnProductsArgs): Promise<TagsOnProducts> {
    return ctx.prisma.tagsOnProducts.create(args);
  }
}
