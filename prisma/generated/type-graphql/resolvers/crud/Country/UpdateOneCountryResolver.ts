import * as TypeGraphQL from "type-graphql";
import { UpdateOneCountryArgs } from "./args/UpdateOneCountryArgs";
import { Country } from "../../../models/Country";

@TypeGraphQL.Resolver(_of => Country)
export class UpdateOneCountryResolver {
  @TypeGraphQL.Mutation(_returns => Country, {
    nullable: true,
    description: undefined
  })
  async updateOneCountry(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneCountryArgs): Promise<Country | null> {
    return ctx.prisma.country.update(args);
  }
}
