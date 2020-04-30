import * as TypeGraphQL from "type-graphql";
import { CreateOneCountryArgs } from "./args/CreateOneCountryArgs";
import { Country } from "../../../models/Country";

@TypeGraphQL.Resolver(_of => Country)
export class CreateOneCountryResolver {
  @TypeGraphQL.Mutation(_returns => Country, {
    nullable: false,
    description: undefined
  })
  async createOneCountry(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneCountryArgs): Promise<Country> {
    return ctx.prisma.country.create(args);
  }
}
