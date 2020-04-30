import * as TypeGraphQL from "type-graphql";
import { CreateOneProductsOnCounponArgs } from "./args/CreateOneProductsOnCounponArgs";
import { ProductsOnCounpon } from "../../../models/ProductsOnCounpon";

@TypeGraphQL.Resolver(_of => ProductsOnCounpon)
export class CreateOneProductsOnCounponResolver {
  @TypeGraphQL.Mutation(_returns => ProductsOnCounpon, {
    nullable: false,
    description: undefined
  })
  async createOneProductsOnCounpon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneProductsOnCounponArgs): Promise<ProductsOnCounpon> {
    return ctx.prisma.productsOnCounpon.create(args);
  }
}
