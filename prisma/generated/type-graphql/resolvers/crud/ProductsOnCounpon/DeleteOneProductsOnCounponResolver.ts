import * as TypeGraphQL from "type-graphql";
import { DeleteOneProductsOnCounponArgs } from "./args/DeleteOneProductsOnCounponArgs";
import { ProductsOnCounpon } from "../../../models/ProductsOnCounpon";

@TypeGraphQL.Resolver(_of => ProductsOnCounpon)
export class DeleteOneProductsOnCounponResolver {
  @TypeGraphQL.Mutation(_returns => ProductsOnCounpon, {
    nullable: true,
    description: undefined
  })
  async deleteOneProductsOnCounpon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneProductsOnCounponArgs): Promise<ProductsOnCounpon | null> {
    return ctx.prisma.productsOnCounpon.delete(args);
  }
}
