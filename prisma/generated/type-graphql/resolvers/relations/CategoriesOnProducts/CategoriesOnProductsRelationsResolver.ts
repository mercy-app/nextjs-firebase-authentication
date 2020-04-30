import * as TypeGraphQL from "type-graphql";
import { CategoriesOnProducts } from "../../../models/CategoriesOnProducts";
import { Category } from "../../../models/Category";
import { Product } from "../../../models/Product";

@TypeGraphQL.Resolver(_of => CategoriesOnProducts)
export class CategoriesOnProductsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Product, {
    nullable: false,
    description: undefined,
  })
  async product(@TypeGraphQL.Root() categoriesOnProducts: CategoriesOnProducts, @TypeGraphQL.Ctx() ctx: any): Promise<Product> {
    return ctx.prisma.categoriesOnProducts.findOne({
      where: {
        productId_categoryId: {
          productId: categoriesOnProducts.productId,
          categoryId: categoriesOnProducts.categoryId,
        },
      },
    }).product({});
  }

  @TypeGraphQL.FieldResolver(_type => Category, {
    nullable: false,
    description: undefined,
  })
  async category(@TypeGraphQL.Root() categoriesOnProducts: CategoriesOnProducts, @TypeGraphQL.Ctx() ctx: any): Promise<Category> {
    return ctx.prisma.categoriesOnProducts.findOne({
      where: {
        productId_categoryId: {
          productId: categoriesOnProducts.productId,
          categoryId: categoriesOnProducts.categoryId,
        },
      },
    }).category({});
  }
}
