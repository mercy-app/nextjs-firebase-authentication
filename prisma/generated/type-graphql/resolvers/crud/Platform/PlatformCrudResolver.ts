import * as TypeGraphQL from "type-graphql";
import { CreateOnePlatformArgs } from "./args/CreateOnePlatformArgs";
import { DeleteManyPlatformArgs } from "./args/DeleteManyPlatformArgs";
import { DeleteOnePlatformArgs } from "./args/DeleteOnePlatformArgs";
import { FindManyPlatformArgs } from "./args/FindManyPlatformArgs";
import { FindOnePlatformArgs } from "./args/FindOnePlatformArgs";
import { UpdateManyPlatformArgs } from "./args/UpdateManyPlatformArgs";
import { UpdateOnePlatformArgs } from "./args/UpdateOnePlatformArgs";
import { UpsertOnePlatformArgs } from "./args/UpsertOnePlatformArgs";
import { Platform } from "../../../models/Platform";
import { AggregatePlatform } from "../../outputs/AggregatePlatform";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Platform)
export class PlatformCrudResolver {
  @TypeGraphQL.Query(_returns => Platform, {
    nullable: true,
    description: undefined
  })
  async platform(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOnePlatformArgs): Promise<Platform | null> {
    return ctx.prisma.platform.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Platform], {
    nullable: false,
    description: undefined
  })
  async platforms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyPlatformArgs): Promise<Platform[]> {
    return ctx.prisma.platform.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Platform, {
    nullable: false,
    description: undefined
  })
  async createOnePlatform(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOnePlatformArgs): Promise<Platform> {
    return ctx.prisma.platform.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Platform, {
    nullable: true,
    description: undefined
  })
  async deleteOnePlatform(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOnePlatformArgs): Promise<Platform | null> {
    return ctx.prisma.platform.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Platform, {
    nullable: true,
    description: undefined
  })
  async updateOnePlatform(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOnePlatformArgs): Promise<Platform | null> {
    return ctx.prisma.platform.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyPlatform(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyPlatformArgs): Promise<BatchPayload> {
    return ctx.prisma.platform.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyPlatform(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyPlatformArgs): Promise<BatchPayload> {
    return ctx.prisma.platform.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Platform, {
    nullable: false,
    description: undefined
  })
  async upsertOnePlatform(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOnePlatformArgs): Promise<Platform> {
    return ctx.prisma.platform.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregatePlatform, {
    nullable: false,
    description: undefined
  })
  async aggregatePlatform(): Promise<AggregatePlatform> {
    return new AggregatePlatform();
  }
}
