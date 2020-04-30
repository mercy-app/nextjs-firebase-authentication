import * as TypeGraphQL from "type-graphql";
import { CreateOneCompanyArgs } from "./args/CreateOneCompanyArgs";
import { Company } from "../../../models/Company";

@TypeGraphQL.Resolver(_of => Company)
export class CreateOneCompanyResolver {
  @TypeGraphQL.Mutation(_returns => Company, {
    nullable: false,
    description: undefined
  })
  async createOneCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneCompanyArgs): Promise<Company> {
    return ctx.prisma.company.create(args);
  }
}
