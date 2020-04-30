import * as TypeGraphQL from "type-graphql";
import { DeleteManyCompanyArgs } from "./args/DeleteManyCompanyArgs";
import { Company } from "../../../models/Company";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Company)
export class DeleteManyCompanyResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCompanyArgs): Promise<BatchPayload> {
    return ctx.prisma.company.deleteMany(args);
  }
}
