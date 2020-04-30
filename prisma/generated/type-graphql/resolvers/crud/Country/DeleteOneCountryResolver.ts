import * as TypeGraphQL from "type-graphql";
import { DeleteOneCountryArgs } from "./args/DeleteOneCountryArgs";
import { Country } from "../../../models/Country";

@TypeGraphQL.Resolver(_of => Country)
export class DeleteOneCountryResolver {
  @TypeGraphQL.Mutation(_returns => Country, {
    nullable: true,
    description: undefined
  })
  async deleteOneCountry(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneCountryArgs): Promise<Country | null> {
    return ctx.prisma.country.delete(args);
  }
}
