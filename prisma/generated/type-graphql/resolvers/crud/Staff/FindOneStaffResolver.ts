import * as TypeGraphQL from "type-graphql";
import { FindOneStaffArgs } from "./args/FindOneStaffArgs";
import { Staff } from "../../../models/Staff";

@TypeGraphQL.Resolver(_of => Staff)
export class FindOneStaffResolver {
  @TypeGraphQL.Query(_returns => Staff, {
    nullable: true,
    description: undefined
  })
  async staff(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneStaffArgs): Promise<Staff | null> {
    return ctx.prisma.staff.findOne(args);
  }
}
