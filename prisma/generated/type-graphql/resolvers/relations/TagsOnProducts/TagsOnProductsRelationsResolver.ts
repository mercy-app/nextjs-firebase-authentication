import * as TypeGraphQL from "type-graphql";
import { Product } from "../../../models/Product";
import { Tag } from "../../../models/Tag";
import { TagsOnProducts } from "../../../models/TagsOnProducts";

@TypeGraphQL.Resolver(_of => TagsOnProducts)
export class TagsOnProductsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Product, {
    nullable: false,
    description: undefined,
  })
  async product(@TypeGraphQL.Root() tagsOnProducts: TagsOnProducts, @TypeGraphQL.Ctx() ctx: any): Promise<Product> {
    return ctx.prisma.tagsOnProducts.findOne({
      where: {
        productId_tagId: {
          productId: tagsOnProducts.productId,
          tagId: tagsOnProducts.tagId,
        },
      },
    }).product({});
  }

  @TypeGraphQL.FieldResolver(_type => Tag, {
    nullable: false,
    description: undefined,
  })
  async tag(@TypeGraphQL.Root() tagsOnProducts: TagsOnProducts, @TypeGraphQL.Ctx() ctx: any): Promise<Tag> {
    return ctx.prisma.tagsOnProducts.findOne({
      where: {
        productId_tagId: {
          productId: tagsOnProducts.productId,
          tagId: tagsOnProducts.tagId,
        },
      },
    }).tag({});
  }
}
