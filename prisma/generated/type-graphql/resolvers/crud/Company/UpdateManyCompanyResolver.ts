import * as TypeGraphQL from "type-graphql";
import { UpdateManyCompanyArgs } from "./args/UpdateManyCompanyArgs";
import { Company } from "../../../models/Company";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Company)
export class UpdateManyCompanyResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCompanyArgs): Promise<BatchPayload> {
    return ctx.prisma.company.updateMany(args);
  }
}
