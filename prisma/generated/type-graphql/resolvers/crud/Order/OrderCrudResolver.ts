import * as TypeGraphQL from "type-graphql";
import { CreateOneOrderArgs } from "./args/CreateOneOrderArgs";
import { DeleteManyOrderArgs } from "./args/DeleteManyOrderArgs";
import { DeleteOneOrderArgs } from "./args/DeleteOneOrderArgs";
import { FindManyOrderArgs } from "./args/FindManyOrderArgs";
import { FindOneOrderArgs } from "./args/FindOneOrderArgs";
import { UpdateManyOrderArgs } from "./args/UpdateManyOrderArgs";
import { UpdateOneOrderArgs } from "./args/UpdateOneOrderArgs";
import { UpsertOneOrderArgs } from "./args/UpsertOneOrderArgs";
import { Order } from "../../../models/Order";
import { AggregateOrder } from "../../outputs/AggregateOrder";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Order)
export class OrderCrudResolver {
  @TypeGraphQL.Query(_returns => Order, {
    nullable: true,
    description: undefined
  })
  async order(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneOrderArgs): Promise<Order | null> {
    return ctx.prisma.order.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Order], {
    nullable: false,
    description: undefined
  })
  async orders(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyOrderArgs): Promise<Order[]> {
    return ctx.prisma.order.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Order, {
    nullable: false,
    description: undefined
  })
  async createOneOrder(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneOrderArgs): Promise<Order> {
    return ctx.prisma.order.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Order, {
    nullable: true,
    description: undefined
  })
  async deleteOneOrder(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneOrderArgs): Promise<Order | null> {
    return ctx.prisma.order.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Order, {
    nullable: true,
    description: undefined
  })
  async updateOneOrder(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneOrderArgs): Promise<Order | null> {
    return ctx.prisma.order.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyOrder(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyOrderArgs): Promise<BatchPayload> {
    return ctx.prisma.order.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyOrder(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyOrderArgs): Promise<BatchPayload> {
    return ctx.prisma.order.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Order, {
    nullable: false,
    description: undefined
  })
  async upsertOneOrder(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneOrderArgs): Promise<Order> {
    return ctx.prisma.order.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateOrder, {
    nullable: false,
    description: undefined
  })
  async aggregateOrder(): Promise<AggregateOrder> {
    return new AggregateOrder();
  }
}
