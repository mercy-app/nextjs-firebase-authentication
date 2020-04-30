import * as TypeGraphQL from "type-graphql";
import { UpsertOneCategoriesOnProductsArgs } from "./args/UpsertOneCategoriesOnProductsArgs";
import { CategoriesOnProducts } from "../../../models/CategoriesOnProducts";

@TypeGraphQL.Resolver(_of => CategoriesOnProducts)
export class UpsertOneCategoriesOnProductsResolver {
  @TypeGraphQL.Mutation(_returns => CategoriesOnProducts, {
    nullable: false,
    description: undefined
  })
  async upsertOneCategoriesOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneCategoriesOnProductsArgs): Promise<CategoriesOnProducts> {
    return ctx.prisma.categoriesOnProducts.upsert(args);
  }
}
