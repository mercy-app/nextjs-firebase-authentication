import * as TypeGraphQL from "type-graphql";
import { DeleteManyCategoriesOnProductsArgs } from "./args/DeleteManyCategoriesOnProductsArgs";
import { CategoriesOnProducts } from "../../../models/CategoriesOnProducts";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => CategoriesOnProducts)
export class DeleteManyCategoriesOnProductsResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyCategoriesOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCategoriesOnProductsArgs): Promise<BatchPayload> {
    return ctx.prisma.categoriesOnProducts.deleteMany(args);
  }
}
