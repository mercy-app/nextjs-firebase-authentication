import * as TypeGraphQL from "type-graphql";
import { DeleteOneStaffArgs } from "./args/DeleteOneStaffArgs";
import { Staff } from "../../../models/Staff";

@TypeGraphQL.Resolver(_of => Staff)
export class DeleteOneStaffResolver {
  @TypeGraphQL.Mutation(_returns => Staff, {
    nullable: true,
    description: undefined
  })
  async deleteOneStaff(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneStaffArgs): Promise<Staff | null> {
    return ctx.prisma.staff.delete(args);
  }
}
