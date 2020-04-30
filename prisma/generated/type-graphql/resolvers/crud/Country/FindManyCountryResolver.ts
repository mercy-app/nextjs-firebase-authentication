import * as TypeGraphQL from "type-graphql";
import { FindManyCountryArgs } from "./args/FindManyCountryArgs";
import { Country } from "../../../models/Country";

@TypeGraphQL.Resolver(_of => Country)
export class FindManyCountryResolver {
  @TypeGraphQL.Query(_returns => [Country], {
    nullable: false,
    description: undefined
  })
  async countries(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCountryArgs): Promise<Country[]> {
    return ctx.prisma.country.findMany(args);
  }
}
