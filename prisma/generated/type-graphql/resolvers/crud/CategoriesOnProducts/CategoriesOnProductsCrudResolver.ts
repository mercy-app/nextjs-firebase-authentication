import * as TypeGraphQL from "type-graphql";
import { CreateOneCategoriesOnProductsArgs } from "./args/CreateOneCategoriesOnProductsArgs";
import { DeleteManyCategoriesOnProductsArgs } from "./args/DeleteManyCategoriesOnProductsArgs";
import { DeleteOneCategoriesOnProductsArgs } from "./args/DeleteOneCategoriesOnProductsArgs";
import { FindManyCategoriesOnProductsArgs } from "./args/FindManyCategoriesOnProductsArgs";
import { FindOneCategoriesOnProductsArgs } from "./args/FindOneCategoriesOnProductsArgs";
import { UpdateManyCategoriesOnProductsArgs } from "./args/UpdateManyCategoriesOnProductsArgs";
import { UpdateOneCategoriesOnProductsArgs } from "./args/UpdateOneCategoriesOnProductsArgs";
import { UpsertOneCategoriesOnProductsArgs } from "./args/UpsertOneCategoriesOnProductsArgs";
import { CategoriesOnProducts } from "../../../models/CategoriesOnProducts";
import { AggregateCategoriesOnProducts } from "../../outputs/AggregateCategoriesOnProducts";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => CategoriesOnProducts)
export class CategoriesOnProductsCrudResolver {
  @TypeGraphQL.Query(_returns => CategoriesOnProducts, {
    nullable: true,
    description: undefined
  })
  async categoriesOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneCategoriesOnProductsArgs): Promise<CategoriesOnProducts | null> {
    return ctx.prisma.categoriesOnProducts.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [CategoriesOnProducts], {
    nullable: false,
    description: undefined
  })
  async categoriesOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCategoriesOnProductsArgs): Promise<CategoriesOnProducts[]> {
    return ctx.prisma.categoriesOnProducts.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CategoriesOnProducts, {
    nullable: false,
    description: undefined
  })
  async createOneCategoriesOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneCategoriesOnProductsArgs): Promise<CategoriesOnProducts> {
    return ctx.prisma.categoriesOnProducts.create(args);
  }

  @TypeGraphQL.Mutation(_returns => CategoriesOnProducts, {
    nullable: true,
    description: undefined
  })
  async deleteOneCategoriesOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneCategoriesOnProductsArgs): Promise<CategoriesOnProducts | null> {
    return ctx.prisma.categoriesOnProducts.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => CategoriesOnProducts, {
    nullable: true,
    description: undefined
  })
  async updateOneCategoriesOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneCategoriesOnProductsArgs): Promise<CategoriesOnProducts | null> {
    return ctx.prisma.categoriesOnProducts.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyCategoriesOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCategoriesOnProductsArgs): Promise<BatchPayload> {
    return ctx.prisma.categoriesOnProducts.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyCategoriesOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCategoriesOnProductsArgs): Promise<BatchPayload> {
    return ctx.prisma.categoriesOnProducts.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CategoriesOnProducts, {
    nullable: false,
    description: undefined
  })
  async upsertOneCategoriesOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneCategoriesOnProductsArgs): Promise<CategoriesOnProducts> {
    return ctx.prisma.categoriesOnProducts.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCategoriesOnProducts, {
    nullable: false,
    description: undefined
  })
  async aggregateCategoriesOnProducts(): Promise<AggregateCategoriesOnProducts> {
    return new AggregateCategoriesOnProducts();
  }
}
