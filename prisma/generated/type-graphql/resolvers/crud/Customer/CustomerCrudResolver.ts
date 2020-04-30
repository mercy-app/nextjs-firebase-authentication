import * as TypeGraphQL from "type-graphql";
import { CreateOneCustomerArgs } from "./args/CreateOneCustomerArgs";
import { DeleteManyCustomerArgs } from "./args/DeleteManyCustomerArgs";
import { DeleteOneCustomerArgs } from "./args/DeleteOneCustomerArgs";
import { FindManyCustomerArgs } from "./args/FindManyCustomerArgs";
import { FindOneCustomerArgs } from "./args/FindOneCustomerArgs";
import { UpdateManyCustomerArgs } from "./args/UpdateManyCustomerArgs";
import { UpdateOneCustomerArgs } from "./args/UpdateOneCustomerArgs";
import { UpsertOneCustomerArgs } from "./args/UpsertOneCustomerArgs";
import { Customer } from "../../../models/Customer";
import { AggregateCustomer } from "../../outputs/AggregateCustomer";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Customer)
export class CustomerCrudResolver {
  @TypeGraphQL.Query(_returns => Customer, {
    nullable: true,
    description: undefined
  })
  async customer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneCustomerArgs): Promise<Customer | null> {
    return ctx.prisma.customer.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Customer], {
    nullable: false,
    description: undefined
  })
  async customers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCustomerArgs): Promise<Customer[]> {
    return ctx.prisma.customer.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Customer, {
    nullable: false,
    description: undefined
  })
  async createOneCustomer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneCustomerArgs): Promise<Customer> {
    return ctx.prisma.customer.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Customer, {
    nullable: true,
    description: undefined
  })
  async deleteOneCustomer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneCustomerArgs): Promise<Customer | null> {
    return ctx.prisma.customer.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Customer, {
    nullable: true,
    description: undefined
  })
  async updateOneCustomer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneCustomerArgs): Promise<Customer | null> {
    return ctx.prisma.customer.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyCustomer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCustomerArgs): Promise<BatchPayload> {
    return ctx.prisma.customer.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyCustomer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCustomerArgs): Promise<BatchPayload> {
    return ctx.prisma.customer.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Customer, {
    nullable: false,
    description: undefined
  })
  async upsertOneCustomer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneCustomerArgs): Promise<Customer> {
    return ctx.prisma.customer.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCustomer, {
    nullable: false,
    description: undefined
  })
  async aggregateCustomer(): Promise<AggregateCustomer> {
    return new AggregateCustomer();
  }
}
