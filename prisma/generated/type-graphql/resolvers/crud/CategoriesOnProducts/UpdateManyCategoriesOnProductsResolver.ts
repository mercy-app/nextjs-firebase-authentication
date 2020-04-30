import * as TypeGraphQL from "type-graphql";
import { UpdateManyCategoriesOnProductsArgs } from "./args/UpdateManyCategoriesOnProductsArgs";
import { CategoriesOnProducts } from "../../../models/CategoriesOnProducts";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => CategoriesOnProducts)
export class UpdateManyCategoriesOnProductsResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyCategoriesOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCategoriesOnProductsArgs): Promise<BatchPayload> {
    return ctx.prisma.categoriesOnProducts.updateMany(args);
  }
}
