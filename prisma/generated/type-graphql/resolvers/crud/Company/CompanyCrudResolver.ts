import * as TypeGraphQL from "type-graphql";
import { CreateOneCompanyArgs } from "./args/CreateOneCompanyArgs";
import { DeleteManyCompanyArgs } from "./args/DeleteManyCompanyArgs";
import { DeleteOneCompanyArgs } from "./args/DeleteOneCompanyArgs";
import { FindManyCompanyArgs } from "./args/FindManyCompanyArgs";
import { FindOneCompanyArgs } from "./args/FindOneCompanyArgs";
import { UpdateManyCompanyArgs } from "./args/UpdateManyCompanyArgs";
import { UpdateOneCompanyArgs } from "./args/UpdateOneCompanyArgs";
import { UpsertOneCompanyArgs } from "./args/UpsertOneCompanyArgs";
import { Company } from "../../../models/Company";
import { AggregateCompany } from "../../outputs/AggregateCompany";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Company)
export class CompanyCrudResolver {
  @TypeGraphQL.Query(_returns => Company, {
    nullable: true,
    description: undefined
  })
  async company(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneCompanyArgs): Promise<Company | null> {
    return ctx.prisma.company.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Company], {
    nullable: false,
    description: undefined
  })
  async companies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCompanyArgs): Promise<Company[]> {
    return ctx.prisma.company.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Company, {
    nullable: false,
    description: undefined
  })
  async createOneCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneCompanyArgs): Promise<Company> {
    return ctx.prisma.company.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Company, {
    nullable: true,
    description: undefined
  })
  async deleteOneCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneCompanyArgs): Promise<Company | null> {
    return ctx.prisma.company.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Company, {
    nullable: true,
    description: undefined
  })
  async updateOneCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneCompanyArgs): Promise<Company | null> {
    return ctx.prisma.company.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCompanyArgs): Promise<BatchPayload> {
    return ctx.prisma.company.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCompanyArgs): Promise<BatchPayload> {
    return ctx.prisma.company.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Company, {
    nullable: false,
    description: undefined
  })
  async upsertOneCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneCompanyArgs): Promise<Company> {
    return ctx.prisma.company.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCompany, {
    nullable: false,
    description: undefined
  })
  async aggregateCompany(): Promise<AggregateCompany> {
    return new AggregateCompany();
  }
}
