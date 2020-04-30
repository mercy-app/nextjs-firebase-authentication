import * as TypeGraphQL from "type-graphql";
import { UpdateManyStaffArgs } from "./args/UpdateManyStaffArgs";
import { Staff } from "../../../models/Staff";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Staff)
export class UpdateManyStaffResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyStaff(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyStaffArgs): Promise<BatchPayload> {
    return ctx.prisma.staff.updateMany(args);
  }
}
