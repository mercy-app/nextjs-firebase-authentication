import * as TypeGraphQL from "type-graphql";
import { FindManyCategoriesOnProductsArgs } from "./args/FindManyCategoriesOnProductsArgs";
import { CategoriesOnProducts } from "../../../models/CategoriesOnProducts";

@TypeGraphQL.Resolver(_of => CategoriesOnProducts)
export class FindManyCategoriesOnProductsResolver {
  @TypeGraphQL.Query(_returns => [CategoriesOnProducts], {
    nullable: false,
    description: undefined
  })
  async categoriesOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCategoriesOnProductsArgs): Promise<CategoriesOnProducts[]> {
    return ctx.prisma.categoriesOnProducts.findMany(args);
  }
}
