import * as TypeGraphQL from "type-graphql";
import { CreateOneStaffArgs } from "./args/CreateOneStaffArgs";
import { DeleteManyStaffArgs } from "./args/DeleteManyStaffArgs";
import { DeleteOneStaffArgs } from "./args/DeleteOneStaffArgs";
import { FindManyStaffArgs } from "./args/FindManyStaffArgs";
import { FindOneStaffArgs } from "./args/FindOneStaffArgs";
import { UpdateManyStaffArgs } from "./args/UpdateManyStaffArgs";
import { UpdateOneStaffArgs } from "./args/UpdateOneStaffArgs";
import { UpsertOneStaffArgs } from "./args/UpsertOneStaffArgs";
import { Staff } from "../../../models/Staff";
import { AggregateStaff } from "../../outputs/AggregateStaff";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Staff)
export class StaffCrudResolver {
  @TypeGraphQL.Query(_returns => Staff, {
    nullable: true,
    description: undefined
  })
  async staff(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneStaffArgs): Promise<Staff | null> {
    return ctx.prisma.staff.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Staff], {
    nullable: false,
    description: undefined
  })
  async staff(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyStaffArgs): Promise<Staff[]> {
    return ctx.prisma.staff.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Staff, {
    nullable: false,
    description: undefined
  })
  async createOneStaff(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneStaffArgs): Promise<Staff> {
    return ctx.prisma.staff.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Staff, {
    nullable: true,
    description: undefined
  })
  async deleteOneStaff(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneStaffArgs): Promise<Staff | null> {
    return ctx.prisma.staff.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Staff, {
    nullable: true,
    description: undefined
  })
  async updateOneStaff(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneStaffArgs): Promise<Staff | null> {
    return ctx.prisma.staff.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyStaff(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyStaffArgs): Promise<BatchPayload> {
    return ctx.prisma.staff.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyStaff(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyStaffArgs): Promise<BatchPayload> {
    return ctx.prisma.staff.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Staff, {
    nullable: false,
    description: undefined
  })
  async upsertOneStaff(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneStaffArgs): Promise<Staff> {
    return ctx.prisma.staff.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateStaff, {
    nullable: false,
    description: undefined
  })
  async aggregateStaff(): Promise<AggregateStaff> {
    return new AggregateStaff();
  }
}
