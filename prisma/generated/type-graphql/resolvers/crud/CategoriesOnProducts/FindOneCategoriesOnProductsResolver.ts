import * as TypeGraphQL from "type-graphql";
import { FindOneCategoriesOnProductsArgs } from "./args/FindOneCategoriesOnProductsArgs";
import { CategoriesOnProducts } from "../../../models/CategoriesOnProducts";

@TypeGraphQL.Resolver(_of => CategoriesOnProducts)
export class FindOneCategoriesOnProductsResolver {
  @TypeGraphQL.Query(_returns => CategoriesOnProducts, {
    nullable: true,
    description: undefined
  })
  async categoriesOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneCategoriesOnProductsArgs): Promise<CategoriesOnProducts | null> {
    return ctx.prisma.categoriesOnProducts.findOne(args);
  }
}
