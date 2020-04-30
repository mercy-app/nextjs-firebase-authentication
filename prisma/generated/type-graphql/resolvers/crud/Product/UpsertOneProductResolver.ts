import * as TypeGraphQL from "type-graphql";
import { UpsertOneProductArgs } from "./args/UpsertOneProductArgs";
import { Product } from "../../../models/Product";

@TypeGraphQL.Resolver(_of => Product)
export class UpsertOneProductResolver {
  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: false,
    description: undefined
  })
  async upsertOneProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneProductArgs): Promise<Product> {
    return ctx.prisma.product.upsert(args);
  }
}
