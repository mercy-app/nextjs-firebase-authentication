import * as TypeGraphQL from "type-graphql";
import { UpsertOneCountryArgs } from "./args/UpsertOneCountryArgs";
import { Country } from "../../../models/Country";

@TypeGraphQL.Resolver(_of => Country)
export class UpsertOneCountryResolver {
  @TypeGraphQL.Mutation(_returns => Country, {
    nullable: false,
    description: undefined
  })
  async upsertOneCountry(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneCountryArgs): Promise<Country> {
    return ctx.prisma.country.upsert(args);
  }
}
