import * as TypeGraphQL from "type-graphql";
import { DeleteOneProductArgs } from "./args/DeleteOneProductArgs";
import { Product } from "../../../models/Product";

@TypeGraphQL.Resolver(_of => Product)
export class DeleteOneProductResolver {
  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: true,
    description: undefined
  })
  async deleteOneProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneProductArgs): Promise<Product | null> {
    return ctx.prisma.product.delete(args);
  }
}
