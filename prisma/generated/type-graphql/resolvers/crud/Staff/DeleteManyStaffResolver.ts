import * as TypeGraphQL from "type-graphql";
import { DeleteManyStaffArgs } from "./args/DeleteManyStaffArgs";
import { Staff } from "../../../models/Staff";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Staff)
export class DeleteManyStaffResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyStaff(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyStaffArgs): Promise<BatchPayload> {
    return ctx.prisma.staff.deleteMany(args);
  }
}
