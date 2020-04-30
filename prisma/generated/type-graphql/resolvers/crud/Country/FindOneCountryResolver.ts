import * as TypeGraphQL from "type-graphql";
import { FindOneCountryArgs } from "./args/FindOneCountryArgs";
import { Country } from "../../../models/Country";

@TypeGraphQL.Resolver(_of => Country)
export class FindOneCountryResolver {
  @TypeGraphQL.Query(_returns => Country, {
    nullable: true,
    description: undefined
  })
  async country(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneCountryArgs): Promise<Country | null> {
    return ctx.prisma.country.findOne(args);
  }
}
