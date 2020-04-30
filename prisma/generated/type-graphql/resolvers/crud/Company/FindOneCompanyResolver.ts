import * as TypeGraphQL from "type-graphql";
import { FindOneCompanyArgs } from "./args/FindOneCompanyArgs";
import { Company } from "../../../models/Company";

@TypeGraphQL.Resolver(_of => Company)
export class FindOneCompanyResolver {
  @TypeGraphQL.Query(_returns => Company, {
    nullable: true,
    description: undefined
  })
  async company(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneCompanyArgs): Promise<Company | null> {
    return ctx.prisma.company.findOne(args);
  }
}
