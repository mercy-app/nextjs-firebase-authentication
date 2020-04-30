import * as TypeGraphQL from "type-graphql";
import { CreateOneStaffArgs } from "./args/CreateOneStaffArgs";
import { Staff } from "../../../models/Staff";

@TypeGraphQL.Resolver(_of => Staff)
export class CreateOneStaffResolver {
  @TypeGraphQL.Mutation(_returns => Staff, {
    nullable: false,
    description: undefined
  })
  async createOneStaff(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneStaffArgs): Promise<Staff> {
    return ctx.prisma.staff.create(args);
  }
}
