import * as TypeGraphQL from "type-graphql";
import { Company } from "../../../models/Company";
import { Customer } from "../../../models/Customer";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver(_of => Customer)
export class CustomerRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
    description: undefined,
  })
  async user(@TypeGraphQL.Root() customer: Customer, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return ctx.prisma.customer.findOne({
      where: {
        userId_companyId: {
          userId: customer.userId,
          companyId: customer.companyId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Company, {
    nullable: false,
    description: undefined,
  })
  async company(@TypeGraphQL.Root() customer: Customer, @TypeGraphQL.Ctx() ctx: any): Promise<Company> {
    return ctx.prisma.customer.findOne({
      where: {
        userId_companyId: {
          userId: customer.userId,
          companyId: customer.companyId,
        },
      },
    }).company({});
  }
}
