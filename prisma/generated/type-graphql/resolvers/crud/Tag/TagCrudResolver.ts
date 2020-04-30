import * as TypeGraphQL from "type-graphql";
import { CreateOneTagArgs } from "./args/CreateOneTagArgs";
import { DeleteManyTagArgs } from "./args/DeleteManyTagArgs";
import { DeleteOneTagArgs } from "./args/DeleteOneTagArgs";
import { FindManyTagArgs } from "./args/FindManyTagArgs";
import { FindOneTagArgs } from "./args/FindOneTagArgs";
import { UpdateManyTagArgs } from "./args/UpdateManyTagArgs";
import { UpdateOneTagArgs } from "./args/UpdateOneTagArgs";
import { UpsertOneTagArgs } from "./args/UpsertOneTagArgs";
import { Tag } from "../../../models/Tag";
import { AggregateTag } from "../../outputs/AggregateTag";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Tag)
export class TagCrudResolver {
  @TypeGraphQL.Query(_returns => Tag, {
    nullable: true,
    description: undefined
  })
  async tag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneTagArgs): Promise<Tag | null> {
    return ctx.prisma.tag.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Tag], {
    nullable: false,
    description: undefined
  })
  async tags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTagArgs): Promise<Tag[]> {
    return ctx.prisma.tag.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Tag, {
    nullable: false,
    description: undefined
  })
  async createOneTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneTagArgs): Promise<Tag> {
    return ctx.prisma.tag.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Tag, {
    nullable: true,
    description: undefined
  })
  async deleteOneTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneTagArgs): Promise<Tag | null> {
    return ctx.prisma.tag.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Tag, {
    nullable: true,
    description: undefined
  })
  async updateOneTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneTagArgs): Promise<Tag | null> {
    return ctx.prisma.tag.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTagArgs): Promise<BatchPayload> {
    return ctx.prisma.tag.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTagArgs): Promise<BatchPayload> {
    return ctx.prisma.tag.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Tag, {
    nullable: false,
    description: undefined
  })
  async upsertOneTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneTagArgs): Promise<Tag> {
    return ctx.prisma.tag.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateTag, {
    nullable: false,
    description: undefined
  })
  async aggregateTag(): Promise<AggregateTag> {
    return new AggregateTag();
  }
}
