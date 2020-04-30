import * as TypeGraphQL from "type-graphql";
import { FindOneProductsOnCounponArgs } from "./args/FindOneProductsOnCounponArgs";
import { ProductsOnCounpon } from "../../../models/ProductsOnCounpon";

@TypeGraphQL.Resolver(_of => ProductsOnCounpon)
export class FindOneProductsOnCounponResolver {
  @TypeGraphQL.Query(_returns => ProductsOnCounpon, {
    nullable: true,
    description: undefined
  })
  async productsOnCounpon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneProductsOnCounponArgs): Promise<ProductsOnCounpon | null> {
    return ctx.prisma.productsOnCounpon.findOne(args);
  }
}
