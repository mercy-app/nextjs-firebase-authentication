import * as TypeGraphQL from "type-graphql";
import { CreateOneProductArgs } from "./args/CreateOneProductArgs";
import { Product } from "../../../models/Product";

@TypeGraphQL.Resolver(_of => Product)
export class CreateOneProductResolver {
  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: false,
    description: undefined
  })
  async createOneProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneProductArgs): Promise<Product> {
    return ctx.prisma.product.create(args);
  }
}
