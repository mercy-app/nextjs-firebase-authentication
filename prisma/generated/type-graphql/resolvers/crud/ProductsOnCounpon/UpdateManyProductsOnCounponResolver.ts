import * as TypeGraphQL from "type-graphql";
import { UpdateManyProductsOnCounponArgs } from "./args/UpdateManyProductsOnCounponArgs";
import { ProductsOnCounpon } from "../../../models/ProductsOnCounpon";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => ProductsOnCounpon)
export class UpdateManyProductsOnCounponResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyProductsOnCounpon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyProductsOnCounponArgs): Promise<BatchPayload> {
    return ctx.prisma.productsOnCounpon.updateMany(args);
  }
}
