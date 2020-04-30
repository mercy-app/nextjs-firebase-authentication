import * as TypeGraphQL from "type-graphql";
import { Category } from "../../../models/Category";
import { Company } from "../../../models/Company";
import { Country } from "../../../models/Country";
import { Platform } from "../../../models/Platform";
import { Product } from "../../../models/Product";
import { PlatformCompanyArgs } from "./args/PlatformCompanyArgs";
import { PlatformProductsArgs } from "./args/PlatformProductsArgs";

@TypeGraphQL.Resolver(_of => Platform)
export class PlatformRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Product], {
    nullable: true,
    description: undefined,
  })
  async products(@TypeGraphQL.Root() platform: Platform, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PlatformProductsArgs): Promise<Product[] | null> {
    return ctx.prisma.platform.findOne({
      where: {
        id: platform.id,
      },
    }).products(args);
  }

  @TypeGraphQL.FieldResolver(_type => Category, {
    nullable: false,
    description: undefined,
  })
  async category(@TypeGraphQL.Root() platform: Platform, @TypeGraphQL.Ctx() ctx: any): Promise<Category> {
    return ctx.prisma.platform.findOne({
      where: {
        id: platform.id,
      },
    }).category({});
  }

  @TypeGraphQL.FieldResolver(_type => Country, {
    nullable: false,
    description: undefined,
  })
  async country(@TypeGraphQL.Root() platform: Platform, @TypeGraphQL.Ctx() ctx: any): Promise<Country> {
    return ctx.prisma.platform.findOne({
      where: {
        id: platform.id,
      },
    }).country({});
  }

  @TypeGraphQL.FieldResolver(_type => [Company], {
    nullable: true,
    description: undefined,
  })
  async company(@TypeGraphQL.Root() platform: Platform, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PlatformCompanyArgs): Promise<Company[] | null> {
    return ctx.prisma.platform.findOne({
      where: {
        id: platform.id,
      },
    }).company(args);
  }
}
