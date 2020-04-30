import * as TypeGraphQL from "type-graphql";
import { Company } from "../../../models/Company";
import { Country } from "../../../models/Country";
import { Platform } from "../../../models/Platform";
import { CountryCompanyArgs } from "./args/CountryCompanyArgs";
import { CountryPlatformArgs } from "./args/CountryPlatformArgs";

@TypeGraphQL.Resolver(_of => Country)
export class CountryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Company], {
    nullable: true,
    description: undefined,
  })
  async company(@TypeGraphQL.Root() country: Country, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CountryCompanyArgs): Promise<Company[] | null> {
    return ctx.prisma.country.findOne({
      where: {
        id: country.id,
      },
    }).company(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Platform], {
    nullable: true,
    description: undefined,
  })
  async platform(@TypeGraphQL.Root() country: Country, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CountryPlatformArgs): Promise<Platform[] | null> {
    return ctx.prisma.country.findOne({
      where: {
        id: country.id,
      },
    }).platform(args);
  }
}
