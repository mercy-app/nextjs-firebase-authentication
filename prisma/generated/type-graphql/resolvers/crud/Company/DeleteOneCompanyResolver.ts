import * as TypeGraphQL from "type-graphql";
import { DeleteOneCompanyArgs } from "./args/DeleteOneCompanyArgs";
import { Company } from "../../../models/Company";

@TypeGraphQL.Resolver(_of => Company)
export class DeleteOneCompanyResolver {
  @TypeGraphQL.Mutation(_returns => Company, {
    nullable: true,
    description: undefined
  })
  async deleteOneCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneCompanyArgs): Promise<Company | null> {
    return ctx.prisma.company.delete(args);
  }
}
