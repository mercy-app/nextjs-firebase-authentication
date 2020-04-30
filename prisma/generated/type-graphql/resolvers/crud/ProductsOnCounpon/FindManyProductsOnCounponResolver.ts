import * as TypeGraphQL from "type-graphql";
import { FindManyProductsOnCounponArgs } from "./args/FindManyProductsOnCounponArgs";
import { ProductsOnCounpon } from "../../../models/ProductsOnCounpon";

@TypeGraphQL.Resolver(_of => ProductsOnCounpon)
export class FindManyProductsOnCounponResolver {
  @TypeGraphQL.Query(_returns => [ProductsOnCounpon], {
    nullable: false,
    description: undefined
  })
  async productsOnCounpons(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyProductsOnCounponArgs): Promise<ProductsOnCounpon[]> {
    return ctx.prisma.productsOnCounpon.findMany(args);
  }
}
