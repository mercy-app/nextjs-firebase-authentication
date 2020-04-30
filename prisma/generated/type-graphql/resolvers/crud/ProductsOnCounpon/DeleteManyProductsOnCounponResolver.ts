import * as TypeGraphQL from "type-graphql";
import { DeleteManyProductsOnCounponArgs } from "./args/DeleteManyProductsOnCounponArgs";
import { ProductsOnCounpon } from "../../../models/ProductsOnCounpon";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => ProductsOnCounpon)
export class DeleteManyProductsOnCounponResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyProductsOnCounpon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyProductsOnCounponArgs): Promise<BatchPayload> {
    return ctx.prisma.productsOnCounpon.deleteMany(args);
  }
}
