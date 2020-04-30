import * as TypeGraphQL from "type-graphql";
import { FindManyStaffArgs } from "./args/FindManyStaffArgs";
import { Staff } from "../../../models/Staff";

@TypeGraphQL.Resolver(_of => Staff)
export class FindManyStaffResolver {
  @TypeGraphQL.Query(_returns => [Staff], {
    nullable: false,
    description: undefined
  })
  async staff(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyStaffArgs): Promise<Staff[]> {
    return ctx.prisma.staff.findMany(args);
  }
}
