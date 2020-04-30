import * as TypeGraphQL from "type-graphql";
import { CreateOneAddressArgs } from "./args/CreateOneAddressArgs";
import { DeleteManyAddressArgs } from "./args/DeleteManyAddressArgs";
import { DeleteOneAddressArgs } from "./args/DeleteOneAddressArgs";
import { FindManyAddressArgs } from "./args/FindManyAddressArgs";
import { FindOneAddressArgs } from "./args/FindOneAddressArgs";
import { UpdateManyAddressArgs } from "./args/UpdateManyAddressArgs";
import { UpdateOneAddressArgs } from "./args/UpdateOneAddressArgs";
import { UpsertOneAddressArgs } from "./args/UpsertOneAddressArgs";
import { Address } from "../../../models/Address";
import { AggregateAddress } from "../../outputs/AggregateAddress";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Address)
export class AddressCrudResolver {
  @TypeGraphQL.Query(_returns => Address, {
    nullable: true,
    description: undefined
  })
  async address(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneAddressArgs): Promise<Address | null> {
    return ctx.prisma.address.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Address], {
    nullable: false,
    description: undefined
  })
  async addresses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyAddressArgs): Promise<Address[]> {
    return ctx.prisma.address.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Address, {
    nullable: false,
    description: undefined
  })
  async createOneAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneAddressArgs): Promise<Address> {
    return ctx.prisma.address.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Address, {
    nullable: true,
    description: undefined
  })
  async deleteOneAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneAddressArgs): Promise<Address | null> {
    return ctx.prisma.address.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Address, {
    nullable: true,
    description: undefined
  })
  async updateOneAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneAddressArgs): Promise<Address | null> {
    return ctx.prisma.address.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyAddressArgs): Promise<BatchPayload> {
    return ctx.prisma.address.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyAddressArgs): Promise<BatchPayload> {
    return ctx.prisma.address.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Address, {
    nullable: false,
    description: undefined
  })
  async upsertOneAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneAddressArgs): Promise<Address> {
    return ctx.prisma.address.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateAddress, {
    nullable: false,
    description: undefined
  })
  async aggregateAddress(): Promise<AggregateAddress> {
    return new AggregateAddress();
  }
}
