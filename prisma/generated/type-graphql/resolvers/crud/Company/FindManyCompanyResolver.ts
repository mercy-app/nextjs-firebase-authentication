import * as TypeGraphQL from "type-graphql";
import { FindManyCompanyArgs } from "./args/FindManyCompanyArgs";
import { Company } from "../../../models/Company";

@TypeGraphQL.Resolver(_of => Company)
export class FindManyCompanyResolver {
  @TypeGraphQL.Query(_returns => [Company], {
    nullable: false,
    description: undefined
  })
  async companies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCompanyArgs): Promise<Company[]> {
    return ctx.prisma.company.findMany(args);
  }
}
