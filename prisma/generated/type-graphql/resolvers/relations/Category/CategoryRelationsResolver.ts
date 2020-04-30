import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPosts } from "../../../models/CategoriesOnPosts";
import { CategoriesOnProducts } from "../../../models/CategoriesOnProducts";
import { Category } from "../../../models/Category";
import { Platform } from "../../../models/Platform";
import { CategoryChildrenArgs } from "./args/CategoryChildrenArgs";
import { CategoryPostsArgs } from "./args/CategoryPostsArgs";
import { CategoryProductsArgs } from "./args/CategoryProductsArgs";

@TypeGraphQL.Resolver(_of => Category)
export class CategoryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Category, {
    nullable: true,
    description: undefined,
  })
  async parent(@TypeGraphQL.Root() category: Category, @TypeGraphQL.Ctx() ctx: any): Promise<Category | null> {
    return ctx.prisma.category.findOne({
      where: {
        id: category.id,
      },
    }).parent({});
  }

  @TypeGraphQL.FieldResolver(_type => [Category], {
    nullable: true,
    description: undefined,
  })
  async children(@TypeGraphQL.Root() category: Category, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CategoryChildrenArgs): Promise<Category[] | null> {
    return ctx.prisma.category.findOne({
      where: {
        id: category.id,
      },
    }).children(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CategoriesOnPosts], {
    nullable: true,
    description: undefined,
  })
  async posts(@TypeGraphQL.Root() category: Category, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CategoryPostsArgs): Promise<CategoriesOnPosts[] | null> {
    return ctx.prisma.category.findOne({
      where: {
        id: category.id,
      },
    }).posts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CategoriesOnProducts], {
    nullable: true,
    description: undefined,
  })
  async products(@TypeGraphQL.Root() category: Category, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CategoryProductsArgs): Promise<CategoriesOnProducts[] | null> {
    return ctx.prisma.category.findOne({
      where: {
        id: category.id,
      },
    }).products(args);
  }

  @TypeGraphQL.FieldResolver(_type => Platform, {
    nullable: true,
    description: undefined,
  })
  async platform(@TypeGraphQL.Root() category: Category, @TypeGraphQL.Ctx() ctx: any): Promise<Platform | null> {
    return ctx.prisma.category.findOne({
      where: {
        id: category.id,
      },
    }).platform({});
  }
}
