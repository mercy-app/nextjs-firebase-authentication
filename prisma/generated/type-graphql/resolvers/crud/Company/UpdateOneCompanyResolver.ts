import * as TypeGraphQL from "type-graphql";
import { UpdateOneCompanyArgs } from "./args/UpdateOneCompanyArgs";
import { Company } from "../../../models/Company";

@TypeGraphQL.Resolver(_of => Company)
export class UpdateOneCompanyResolver {
  @TypeGraphQL.Mutation(_returns => Company, {
    nullable: true,
    description: undefined
  })
  async updateOneCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneCompanyArgs): Promise<Company | null> {
    return ctx.prisma.company.update(args);
  }
}
