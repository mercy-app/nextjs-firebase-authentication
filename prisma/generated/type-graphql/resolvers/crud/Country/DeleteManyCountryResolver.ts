import * as TypeGraphQL from "type-graphql";
import { DeleteManyCountryArgs } from "./args/DeleteManyCountryArgs";
import { Country } from "../../../models/Country";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Country)
export class DeleteManyCountryResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyCountry(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCountryArgs): Promise<BatchPayload> {
    return ctx.prisma.country.deleteMany(args);
  }
}
