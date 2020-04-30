import * as TypeGraphQL from "type-graphql";
import { UpdateManyCountryArgs } from "./args/UpdateManyCountryArgs";
import { Country } from "../../../models/Country";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Country)
export class UpdateManyCountryResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyCountry(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCountryArgs): Promise<BatchPayload> {
    return ctx.prisma.country.updateMany(args);
  }
}
