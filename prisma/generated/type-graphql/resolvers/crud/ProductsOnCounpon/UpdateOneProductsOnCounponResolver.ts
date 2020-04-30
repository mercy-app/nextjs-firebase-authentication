import * as TypeGraphQL from "type-graphql";
import { UpdateOneProductsOnCounponArgs } from "./args/UpdateOneProductsOnCounponArgs";
import { ProductsOnCounpon } from "../../../models/ProductsOnCounpon";

@TypeGraphQL.Resolver(_of => ProductsOnCounpon)
export class UpdateOneProductsOnCounponResolver {
  @TypeGraphQL.Mutation(_returns => ProductsOnCounpon, {
    nullable: true,
    description: undefined
  })
  async updateOneProductsOnCounpon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneProductsOnCounponArgs): Promise<ProductsOnCounpon | null> {
    return ctx.prisma.productsOnCounpon.update(args);
  }
}
