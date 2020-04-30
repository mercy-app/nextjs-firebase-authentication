import * as TypeGraphQL from "type-graphql";
import { CategoriesOnProducts } from "../../../models/CategoriesOnProducts";
import { Company } from "../../../models/Company";
import { OrderItem } from "../../../models/OrderItem";
import { Platform } from "../../../models/Platform";
import { Product } from "../../../models/Product";
import { ProductsOnCounpon } from "../../../models/ProductsOnCounpon";
import { Room } from "../../../models/Room";
import { TagsOnProducts } from "../../../models/TagsOnProducts";
import { ProductCategoriesArgs } from "./args/ProductCategoriesArgs";
import { ProductOrdersArgs } from "./args/ProductOrdersArgs";
import { ProductProductsOnCounponArgs } from "./args/ProductProductsOnCounponArgs";
import { ProductRoomArgs } from "./args/ProductRoomArgs";
import { ProductTagsArgs } from "./args/ProductTagsArgs";

@TypeGraphQL.Resolver(_of => Product)
export class ProductRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Company, {
    nullable: false,
    description: undefined,
  })
  async company(@TypeGraphQL.Root() product: Product, @TypeGraphQL.Ctx() ctx: any): Promise<Company> {
    return ctx.prisma.product.findOne({
      where: {
        id: product.id,
      },
    }).company({});
  }

  @TypeGraphQL.FieldResolver(_type => [CategoriesOnProducts], {
    nullable: true,
    description: undefined,
  })
  async categories(@TypeGraphQL.Root() product: Product, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductCategoriesArgs): Promise<CategoriesOnProducts[] | null> {
    return ctx.prisma.product.findOne({
      where: {
        id: product.id,
      },
    }).categories(args);
  }

  @TypeGraphQL.FieldResolver(_type => Platform, {
    nullable: false,
    description: undefined,
  })
  async platform(@TypeGraphQL.Root() product: Product, @TypeGraphQL.Ctx() ctx: any): Promise<Platform> {
    return ctx.prisma.product.findOne({
      where: {
        id: product.id,
      },
    }).platform({});
  }

  @TypeGraphQL.FieldResolver(_type => [TagsOnProducts], {
    nullable: true,
    description: undefined,
  })
  async tags(@TypeGraphQL.Root() product: Product, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductTagsArgs): Promise<TagsOnProducts[] | null> {
    return ctx.prisma.product.findOne({
      where: {
        id: product.id,
      },
    }).tags(args);
  }

  @TypeGraphQL.FieldResolver(_type => [OrderItem], {
    nullable: true,
    description: undefined,
  })
  async orders(@TypeGraphQL.Root() product: Product, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductOrdersArgs): Promise<OrderItem[] | null> {
    return ctx.prisma.product.findOne({
      where: {
        id: product.id,
      },
    }).orders(args);
  }

  @TypeGraphQL.FieldResolver(_type => [ProductsOnCounpon], {
    nullable: true,
    description: undefined,
  })
  async productsOnCounpon(@TypeGraphQL.Root() product: Product, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductProductsOnCounponArgs): Promise<ProductsOnCounpon[] | null> {
    return ctx.prisma.product.findOne({
      where: {
        id: product.id,
      },
    }).productsOnCounpon(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Room], {
    nullable: true,
    description: undefined,
  })
  async room(@TypeGraphQL.Root() product: Product, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductRoomArgs): Promise<Room[] | null> {
    return ctx.prisma.product.findOne({
      where: {
        id: product.id,
      },
    }).room(args);
  }
}
