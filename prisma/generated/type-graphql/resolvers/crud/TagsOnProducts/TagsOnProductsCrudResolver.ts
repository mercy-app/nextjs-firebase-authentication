import * as TypeGraphQL from "type-graphql";
import { CreateOneTagsOnProductsArgs } from "./args/CreateOneTagsOnProductsArgs";
import { DeleteManyTagsOnProductsArgs } from "./args/DeleteManyTagsOnProductsArgs";
import { DeleteOneTagsOnProductsArgs } from "./args/DeleteOneTagsOnProductsArgs";
import { FindManyTagsOnProductsArgs } from "./args/FindManyTagsOnProductsArgs";
import { FindOneTagsOnProductsArgs } from "./args/FindOneTagsOnProductsArgs";
import { UpdateManyTagsOnProductsArgs } from "./args/UpdateManyTagsOnProductsArgs";
import { UpdateOneTagsOnProductsArgs } from "./args/UpdateOneTagsOnProductsArgs";
import { UpsertOneTagsOnProductsArgs } from "./args/UpsertOneTagsOnProductsArgs";
import { TagsOnProducts } from "../../../models/TagsOnProducts";
import { AggregateTagsOnProducts } from "../../outputs/AggregateTagsOnProducts";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => TagsOnProducts)
export class TagsOnProductsCrudResolver {
  @TypeGraphQL.Query(_returns => TagsOnProducts, {
    nullable: true,
    description: undefined
  })
  async tagsOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneTagsOnProductsArgs): Promise<TagsOnProducts | null> {
    return ctx.prisma.tagsOnProducts.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [TagsOnProducts], {
    nullable: false,
    description: undefined
  })
  async tagsOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTagsOnProductsArgs): Promise<TagsOnProducts[]> {
    return ctx.prisma.tagsOnProducts.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => TagsOnProducts, {
    nullable: false,
    description: undefined
  })
  async createOneTagsOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneTagsOnProductsArgs): Promise<TagsOnProducts> {
    return ctx.prisma.tagsOnProducts.create(args);
  }

  @TypeGraphQL.Mutation(_returns => TagsOnProducts, {
    nullable: true,
    description: undefined
  })
  async deleteOneTagsOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneTagsOnProductsArgs): Promise<TagsOnProducts | null> {
    return ctx.prisma.tagsOnProducts.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => TagsOnProducts, {
    nullable: true,
    description: undefined
  })
  async updateOneTagsOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneTagsOnProductsArgs): Promise<TagsOnProducts | null> {
    return ctx.prisma.tagsOnProducts.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyTagsOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTagsOnProductsArgs): Promise<BatchPayload> {
    return ctx.prisma.tagsOnProducts.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyTagsOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTagsOnProductsArgs): Promise<BatchPayload> {
    return ctx.prisma.tagsOnProducts.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => TagsOnProducts, {
    nullable: false,
    description: undefined
  })
  async upsertOneTagsOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneTagsOnProductsArgs): Promise<TagsOnProducts> {
    return ctx.prisma.tagsOnProducts.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateTagsOnProducts, {
    nullable: false,
    description: undefined
  })
  async aggregateTagsOnProducts(): Promise<AggregateTagsOnProducts> {
    return new AggregateTagsOnProducts();
  }
}
