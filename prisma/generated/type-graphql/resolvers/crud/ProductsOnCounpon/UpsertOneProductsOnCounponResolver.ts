import * as TypeGraphQL from "type-graphql";
import { UpsertOneProductsOnCounponArgs } from "./args/UpsertOneProductsOnCounponArgs";
import { ProductsOnCounpon } from "../../../models/ProductsOnCounpon";

@TypeGraphQL.Resolver(_of => ProductsOnCounpon)
export class UpsertOneProductsOnCounponResolver {
  @TypeGraphQL.Mutation(_returns => ProductsOnCounpon, {
    nullable: false,
    description: undefined
  })
  async upsertOneProductsOnCounpon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneProductsOnCounponArgs): Promise<ProductsOnCounpon> {
    return ctx.prisma.productsOnCounpon.upsert(args);
  }
}
