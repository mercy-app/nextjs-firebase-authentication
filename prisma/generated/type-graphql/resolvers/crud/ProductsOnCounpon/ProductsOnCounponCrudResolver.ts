import * as TypeGraphQL from "type-graphql";
import { CreateOneProductsOnCounponArgs } from "./args/CreateOneProductsOnCounponArgs";
import { DeleteManyProductsOnCounponArgs } from "./args/DeleteManyProductsOnCounponArgs";
import { DeleteOneProductsOnCounponArgs } from "./args/DeleteOneProductsOnCounponArgs";
import { FindManyProductsOnCounponArgs } from "./args/FindManyProductsOnCounponArgs";
import { FindOneProductsOnCounponArgs } from "./args/FindOneProductsOnCounponArgs";
import { UpdateManyProductsOnCounponArgs } from "./args/UpdateManyProductsOnCounponArgs";
import { UpdateOneProductsOnCounponArgs } from "./args/UpdateOneProductsOnCounponArgs";
import { UpsertOneProductsOnCounponArgs } from "./args/UpsertOneProductsOnCounponArgs";
import { ProductsOnCounpon } from "../../../models/ProductsOnCounpon";
import { AggregateProductsOnCounpon } from "../../outputs/AggregateProductsOnCounpon";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => ProductsOnCounpon)
export class ProductsOnCounponCrudResolver {
  @TypeGraphQL.Query(_returns => ProductsOnCounpon, {
    nullable: true,
    description: undefined
  })
  async productsOnCounpon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneProductsOnCounponArgs): Promise<ProductsOnCounpon | null> {
    return ctx.prisma.productsOnCounpon.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [ProductsOnCounpon], {
    nullable: false,
    description: undefined
  })
  async productsOnCounpons(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyProductsOnCounponArgs): Promise<ProductsOnCounpon[]> {
    return ctx.prisma.productsOnCounpon.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => ProductsOnCounpon, {
    nullable: false,
    description: undefined
  })
  async createOneProductsOnCounpon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneProductsOnCounponArgs): Promise<ProductsOnCounpon> {
    return ctx.prisma.productsOnCounpon.create(args);
  }

  @TypeGraphQL.Mutation(_returns => ProductsOnCounpon, {
    nullable: true,
    description: undefined
  })
  async deleteOneProductsOnCounpon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneProductsOnCounponArgs): Promise<ProductsOnCounpon | null> {
    return ctx.prisma.productsOnCounpon.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => ProductsOnCounpon, {
    nullable: true,
    description: undefined
  })
  async updateOneProductsOnCounpon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneProductsOnCounponArgs): Promise<ProductsOnCounpon | null> {
    return ctx.prisma.productsOnCounpon.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyProductsOnCounpon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyProductsOnCounponArgs): Promise<BatchPayload> {
    return ctx.prisma.productsOnCounpon.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyProductsOnCounpon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyProductsOnCounponArgs): Promise<BatchPayload> {
    return ctx.prisma.productsOnCounpon.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => ProductsOnCounpon, {
    nullable: false,
    description: undefined
  })
  async upsertOneProductsOnCounpon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneProductsOnCounponArgs): Promise<ProductsOnCounpon> {
    return ctx.prisma.productsOnCounpon.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateProductsOnCounpon, {
    nullable: false,
    description: undefined
  })
  async aggregateProductsOnCounpon(): Promise<AggregateProductsOnCounpon> {
    return new AggregateProductsOnCounpon();
  }
}
