import * as TypeGraphQL from "type-graphql";
import { CreateOneCountryArgs } from "./args/CreateOneCountryArgs";
import { DeleteManyCountryArgs } from "./args/DeleteManyCountryArgs";
import { DeleteOneCountryArgs } from "./args/DeleteOneCountryArgs";
import { FindManyCountryArgs } from "./args/FindManyCountryArgs";
import { FindOneCountryArgs } from "./args/FindOneCountryArgs";
import { UpdateManyCountryArgs } from "./args/UpdateManyCountryArgs";
import { UpdateOneCountryArgs } from "./args/UpdateOneCountryArgs";
import { UpsertOneCountryArgs } from "./args/UpsertOneCountryArgs";
import { Country } from "../../../models/Country";
import { AggregateCountry } from "../../outputs/AggregateCountry";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Country)
export class CountryCrudResolver {
  @TypeGraphQL.Query(_returns => Country, {
    nullable: true,
    description: undefined
  })
  async country(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneCountryArgs): Promise<Country | null> {
    return ctx.prisma.country.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Country], {
    nullable: false,
    description: undefined
  })
  async countries(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCountryArgs): Promise<Country[]> {
    return ctx.prisma.country.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Country, {
    nullable: false,
    description: undefined
  })
  async createOneCountry(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneCountryArgs): Promise<Country> {
    return ctx.prisma.country.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Country, {
    nullable: true,
    description: undefined
  })
  async deleteOneCountry(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneCountryArgs): Promise<Country | null> {
    return ctx.prisma.country.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Country, {
    nullable: true,
    description: undefined
  })
  async updateOneCountry(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneCountryArgs): Promise<Country | null> {
    return ctx.prisma.country.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyCountry(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCountryArgs): Promise<BatchPayload> {
    return ctx.prisma.country.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyCountry(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCountryArgs): Promise<BatchPayload> {
    return ctx.prisma.country.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Country, {
    nullable: false,
    description: undefined
  })
  async upsertOneCountry(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneCountryArgs): Promise<Country> {
    return ctx.prisma.country.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCountry, {
    nullable: false,
    description: undefined
  })
  async aggregateCountry(): Promise<AggregateCountry> {
    return new AggregateCountry();
  }
}
