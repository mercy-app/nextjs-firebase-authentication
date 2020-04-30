import * as TypeGraphQL from "type-graphql";
import { UpdateOneCategoriesOnProductsArgs } from "./args/UpdateOneCategoriesOnProductsArgs";
import { CategoriesOnProducts } from "../../../models/CategoriesOnProducts";

@TypeGraphQL.Resolver(_of => CategoriesOnProducts)
export class UpdateOneCategoriesOnProductsResolver {
  @TypeGraphQL.Mutation(_returns => CategoriesOnProducts, {
    nullable: true,
    description: undefined
  })
  async updateOneCategoriesOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneCategoriesOnProductsArgs): Promise<CategoriesOnProducts | null> {
    return ctx.prisma.categoriesOnProducts.update(args);
  }
}
