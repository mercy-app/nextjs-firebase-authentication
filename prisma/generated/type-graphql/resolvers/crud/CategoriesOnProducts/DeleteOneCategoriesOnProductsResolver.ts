import * as TypeGraphQL from "type-graphql";
import { DeleteOneCategoriesOnProductsArgs } from "./args/DeleteOneCategoriesOnProductsArgs";
import { CategoriesOnProducts } from "../../../models/CategoriesOnProducts";

@TypeGraphQL.Resolver(_of => CategoriesOnProducts)
export class DeleteOneCategoriesOnProductsResolver {
  @TypeGraphQL.Mutation(_returns => CategoriesOnProducts, {
    nullable: true,
    description: undefined
  })
  async deleteOneCategoriesOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneCategoriesOnProductsArgs): Promise<CategoriesOnProducts | null> {
    return ctx.prisma.categoriesOnProducts.delete(args);
  }
}
