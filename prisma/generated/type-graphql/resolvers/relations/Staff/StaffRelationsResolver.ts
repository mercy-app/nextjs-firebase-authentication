import * as TypeGraphQL from "type-graphql";
import { Company } from "../../../models/Company";
import { Staff } from "../../../models/Staff";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver(_of => Staff)
export class StaffRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
    description: undefined,
  })
  async user(@TypeGraphQL.Root() staff: Staff, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return ctx.prisma.staff.findOne({
      where: {
        userId_companyId: {
          userId: staff.userId,
          companyId: staff.companyId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Company, {
    nullable: false,
    description: undefined,
  })
  async company(@TypeGraphQL.Root() staff: Staff, @TypeGraphQL.Ctx() ctx: any): Promise<Company> {
    return ctx.prisma.staff.findOne({
      where: {
        userId_companyId: {
          userId: staff.userId,
          companyId: staff.companyId,
        },
      },
    }).company({});
  }
}
