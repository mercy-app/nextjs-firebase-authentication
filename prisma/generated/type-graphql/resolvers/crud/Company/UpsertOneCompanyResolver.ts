import * as TypeGraphQL from "type-graphql";
import { UpsertOneCompanyArgs } from "./args/UpsertOneCompanyArgs";
import { Company } from "../../../models/Company";

@TypeGraphQL.Resolver(_of => Company)
export class UpsertOneCompanyResolver {
  @TypeGraphQL.Mutation(_returns => Company, {
    nullable: false,
    description: undefined
  })
  async upsertOneCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneCompanyArgs): Promise<Company> {
    return ctx.prisma.company.upsert(args);
  }
}
