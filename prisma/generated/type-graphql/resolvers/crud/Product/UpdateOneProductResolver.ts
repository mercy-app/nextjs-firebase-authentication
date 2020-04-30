import * as TypeGraphQL from "type-graphql";
import { UpdateOneProductArgs } from "./args/UpdateOneProductArgs";
import { Product } from "../../../models/Product";

@TypeGraphQL.Resolver(_of => Product)
export class UpdateOneProductResolver {
  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: true,
    description: undefined
  })
  async updateOneProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneProductArgs): Promise<Product | null> {
    return ctx.prisma.product.update(args);
  }
}
