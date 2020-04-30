import * as TypeGraphQL from "type-graphql";
import { CreateOneProductArgs } from "./args/CreateOneProductArgs";
import { DeleteManyProductArgs } from "./args/DeleteManyProductArgs";
import { DeleteOneProductArgs } from "./args/DeleteOneProductArgs";
import { FindManyProductArgs } from "./args/FindManyProductArgs";
import { FindOneProductArgs } from "./args/FindOneProductArgs";
import { UpdateManyProductArgs } from "./args/UpdateManyProductArgs";
import { UpdateOneProductArgs } from "./args/UpdateOneProductArgs";
import { UpsertOneProductArgs } from "./args/UpsertOneProductArgs";
import { Product } from "../../../models/Product";
import { AggregateProduct } from "../../outputs/AggregateProduct";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Product)
export class ProductCrudResolver {
  @TypeGraphQL.Query(_returns => Product, {
    nullable: true,
    description: undefined
  })
  async product(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneProductArgs): Promise<Product | null> {
    return ctx.prisma.product.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Product], {
    nullable: false,
    description: undefined
  })
  async products(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyProductArgs): Promise<Product[]> {
    return ctx.prisma.product.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: false,
    description: undefined
  })
  async createOneProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneProductArgs): Promise<Product> {
    return ctx.prisma.product.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: true,
    description: undefined
  })
  async deleteOneProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneProductArgs): Promise<Product | null> {
    return ctx.prisma.product.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: true,
    description: undefined
  })
  async updateOneProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneProductArgs): Promise<Product | null> {
    return ctx.prisma.product.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyProductArgs): Promise<BatchPayload> {
    return ctx.prisma.product.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyProductArgs): Promise<BatchPayload> {
    return ctx.prisma.product.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: false,
    description: undefined
  })
  async upsertOneProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneProductArgs): Promise<Product> {
    return ctx.prisma.product.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateProduct, {
    nullable: false,
    description: undefined
  })
  async aggregateProduct(): Promise<AggregateProduct> {
    return new AggregateProduct();
  }
}
