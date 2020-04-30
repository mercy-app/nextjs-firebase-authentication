import * as TypeGraphQL from "type-graphql";
import { UpdateOneStaffArgs } from "./args/UpdateOneStaffArgs";
import { Staff } from "../../../models/Staff";

@TypeGraphQL.Resolver(_of => Staff)
export class UpdateOneStaffResolver {
  @TypeGraphQL.Mutation(_returns => Staff, {
    nullable: true,
    description: undefined
  })
  async updateOneStaff(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneStaffArgs): Promise<Staff | null> {
    return ctx.prisma.staff.update(args);
  }
}
