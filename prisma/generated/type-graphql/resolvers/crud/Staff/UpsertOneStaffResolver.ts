import * as TypeGraphQL from "type-graphql";
import { UpsertOneStaffArgs } from "./args/UpsertOneStaffArgs";
import { Staff } from "../../../models/Staff";

@TypeGraphQL.Resolver(_of => Staff)
export class UpsertOneStaffResolver {
  @TypeGraphQL.Mutation(_returns => Staff, {
    nullable: false,
    description: undefined
  })
  async upsertOneStaff(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneStaffArgs): Promise<Staff> {
    return ctx.prisma.staff.upsert(args);
  }
}
