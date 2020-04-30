import * as TypeGraphQL from "type-graphql";
import { CreateOneCategoriesOnPostsArgs } from "./args/CreateOneCategoriesOnPostsArgs";
import { DeleteManyCategoriesOnPostsArgs } from "./args/DeleteManyCategoriesOnPostsArgs";
import { DeleteOneCategoriesOnPostsArgs } from "./args/DeleteOneCategoriesOnPostsArgs";
import { FindManyCategoriesOnPostsArgs } from "./args/FindManyCategoriesOnPostsArgs";
import { FindOneCategoriesOnPostsArgs } from "./args/FindOneCategoriesOnPostsArgs";
import { UpdateManyCategoriesOnPostsArgs } from "./args/UpdateManyCategoriesOnPostsArgs";
import { UpdateOneCategoriesOnPostsArgs } from "./args/UpdateOneCategoriesOnPostsArgs";
import { UpsertOneCategoriesOnPostsArgs } from "./args/UpsertOneCategoriesOnPostsArgs";
import { CategoriesOnPosts } from "../../../models/CategoriesOnPosts";
import { AggregateCategoriesOnPosts } from "../../outputs/AggregateCategoriesOnPosts";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => CategoriesOnPosts)
export class CategoriesOnPostsCrudResolver {
  @TypeGraphQL.Query(_returns => CategoriesOnPosts, {
    nullable: true,
    description: undefined
  })
  async categoriesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneCategoriesOnPostsArgs): Promise<CategoriesOnPosts | null> {
    return ctx.prisma.categoriesOnPosts.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [CategoriesOnPosts], {
    nullable: false,
    description: undefined
  })
  async categoriesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCategoriesOnPostsArgs): Promise<CategoriesOnPosts[]> {
    return ctx.prisma.categoriesOnPosts.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CategoriesOnPosts, {
    nullable: false,
    description: undefined
  })
  async createOneCategoriesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneCategoriesOnPostsArgs): Promise<CategoriesOnPosts> {
    return ctx.prisma.categoriesOnPosts.create(args);
  }

  @TypeGraphQL.Mutation(_returns => CategoriesOnPosts, {
    nullable: true,
    description: undefined
  })
  async deleteOneCategoriesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneCategoriesOnPostsArgs): Promise<CategoriesOnPosts | null> {
    return ctx.prisma.categoriesOnPosts.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => CategoriesOnPosts, {
    nullable: true,
    description: undefined
  })
  async updateOneCategoriesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneCategoriesOnPostsArgs): Promise<CategoriesOnPosts | null> {
    return ctx.prisma.categoriesOnPosts.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyCategoriesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCategoriesOnPostsArgs): Promise<BatchPayload> {
    return ctx.prisma.categoriesOnPosts.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyCategoriesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCategoriesOnPostsArgs): Promise<BatchPayload> {
    return ctx.prisma.categoriesOnPosts.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CategoriesOnPosts, {
    nullable: false,
    description: undefined
  })
  async upsertOneCategoriesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneCategoriesOnPostsArgs): Promise<CategoriesOnPosts> {
    return ctx.prisma.categoriesOnPosts.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCategoriesOnPosts, {
    nullable: false,
    description: undefined
  })
  async aggregateCategoriesOnPosts(): Promise<AggregateCategoriesOnPosts> {
    return new AggregateCategoriesOnPosts();
  }
}
