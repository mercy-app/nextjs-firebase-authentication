import * as TypeGraphQL from "type-graphql";
import { CreateOneOrderItemArgs } from "./args/CreateOneOrderItemArgs";
import { DeleteManyOrderItemArgs } from "./args/DeleteManyOrderItemArgs";
import { DeleteOneOrderItemArgs } from "./args/DeleteOneOrderItemArgs";
import { FindManyOrderItemArgs } from "./args/FindManyOrderItemArgs";
import { FindOneOrderItemArgs } from "./args/FindOneOrderItemArgs";
import { UpdateManyOrderItemArgs } from "./args/UpdateManyOrderItemArgs";
import { UpdateOneOrderItemArgs } from "./args/UpdateOneOrderItemArgs";
import { UpsertOneOrderItemArgs } from "./args/UpsertOneOrderItemArgs";
import { OrderItem } from "../../../models/OrderItem";
import { AggregateOrderItem } from "../../outputs/AggregateOrderItem";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => OrderItem)
export class OrderItemCrudResolver {
  @TypeGraphQL.Query(_returns => OrderItem, {
    nullable: true,
    description: undefined
  })
  async orderItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneOrderItemArgs): Promise<OrderItem | null> {
    return ctx.prisma.orderItem.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [OrderItem], {
    nullable: false,
    description: undefined
  })
  async orderItems(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyOrderItemArgs): Promise<OrderItem[]> {
    return ctx.prisma.orderItem.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => OrderItem, {
    nullable: false,
    description: undefined
  })
  async createOneOrderItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneOrderItemArgs): Promise<OrderItem> {
    return ctx.prisma.orderItem.create(args);
  }

  @TypeGraphQL.Mutation(_returns => OrderItem, {
    nullable: true,
    description: undefined
  })
  async deleteOneOrderItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneOrderItemArgs): Promise<OrderItem | null> {
    return ctx.prisma.orderItem.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => OrderItem, {
    nullable: true,
    description: undefined
  })
  async updateOneOrderItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneOrderItemArgs): Promise<OrderItem | null> {
    return ctx.prisma.orderItem.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyOrderItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyOrderItemArgs): Promise<BatchPayload> {
    return ctx.prisma.orderItem.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyOrderItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyOrderItemArgs): Promise<BatchPayload> {
    return ctx.prisma.orderItem.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => OrderItem, {
    nullable: false,
    description: undefined
  })
  async upsertOneOrderItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneOrderItemArgs): Promise<OrderItem> {
    return ctx.prisma.orderItem.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateOrderItem, {
    nullable: false,
    description: undefined
  })
  async aggregateOrderItem(): Promise<AggregateOrderItem> {
    return new AggregateOrderItem();
  }
}
