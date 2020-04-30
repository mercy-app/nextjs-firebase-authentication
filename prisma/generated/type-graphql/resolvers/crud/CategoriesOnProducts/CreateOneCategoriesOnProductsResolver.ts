import * as TypeGraphQL from "type-graphql";
import { CreateOneCategoriesOnProductsArgs } from "./args/CreateOneCategoriesOnProductsArgs";
import { CategoriesOnProducts } from "../../../models/CategoriesOnProducts";

@TypeGraphQL.Resolver(_of => CategoriesOnProducts)
export class CreateOneCategoriesOnProductsResolver {
  @TypeGraphQL.Mutation(_returns => CategoriesOnProducts, {
    nullable: false,
    description: undefined
  })
  async createOneCategoriesOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneCategoriesOnProductsArgs): Promise<CategoriesOnProducts> {
    return ctx.prisma.categoriesOnProducts.create(args);
  }
}
