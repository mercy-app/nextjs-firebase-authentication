import * as TypeGraphQL from "type-graphql";
import { CreateOneTagsOnPostsArgs } from "./args/CreateOneTagsOnPostsArgs";
import { DeleteManyTagsOnPostsArgs } from "./args/DeleteManyTagsOnPostsArgs";
import { DeleteOneTagsOnPostsArgs } from "./args/DeleteOneTagsOnPostsArgs";
import { FindManyTagsOnPostsArgs } from "./args/FindManyTagsOnPostsArgs";
import { FindOneTagsOnPostsArgs } from "./args/FindOneTagsOnPostsArgs";
import { UpdateManyTagsOnPostsArgs } from "./args/UpdateManyTagsOnPostsArgs";
import { UpdateOneTagsOnPostsArgs } from "./args/UpdateOneTagsOnPostsArgs";
import { UpsertOneTagsOnPostsArgs } from "./args/UpsertOneTagsOnPostsArgs";
import { TagsOnPosts } from "../../../models/TagsOnPosts";
import { AggregateTagsOnPosts } from "../../outputs/AggregateTagsOnPosts";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => TagsOnPosts)
export class TagsOnPostsCrudResolver {
  @TypeGraphQL.Query(_returns => TagsOnPosts, {
    nullable: true,
    description: undefined
  })
  async tagsOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneTagsOnPostsArgs): Promise<TagsOnPosts | null> {
    return ctx.prisma.tagsOnPosts.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [TagsOnPosts], {
    nullable: false,
    description: undefined
  })
  async tagsOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTagsOnPostsArgs): Promise<TagsOnPosts[]> {
    return ctx.prisma.tagsOnPosts.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => TagsOnPosts, {
    nullable: false,
    description: undefined
  })
  async createOneTagsOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneTagsOnPostsArgs): Promise<TagsOnPosts> {
    return ctx.prisma.tagsOnPosts.create(args);
  }

  @TypeGraphQL.Mutation(_returns => TagsOnPosts, {
    nullable: true,
    description: undefined
  })
  async deleteOneTagsOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneTagsOnPostsArgs): Promise<TagsOnPosts | null> {
    return ctx.prisma.tagsOnPosts.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => TagsOnPosts, {
    nullable: true,
    description: undefined
  })
  async updateOneTagsOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneTagsOnPostsArgs): Promise<TagsOnPosts | null> {
    return ctx.prisma.tagsOnPosts.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyTagsOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTagsOnPostsArgs): Promise<BatchPayload> {
    return ctx.prisma.tagsOnPosts.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyTagsOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTagsOnPostsArgs): Promise<BatchPayload> {
    return ctx.prisma.tagsOnPosts.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => TagsOnPosts, {
    nullable: false,
    description: undefined
  })
  async upsertOneTagsOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneTagsOnPostsArgs): Promise<TagsOnPosts> {
    return ctx.prisma.tagsOnPosts.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateTagsOnPosts, {
    nullable: false,
    description: undefined
  })
  async aggregateTagsOnPosts(): Promise<AggregateTagsOnPosts> {
    return new AggregateTagsOnPosts();
  }
}
