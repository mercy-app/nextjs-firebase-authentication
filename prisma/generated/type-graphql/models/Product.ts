import * as TypeGraphQL from "type-graphql";
import { CategoriesOnProducts } from "../models/CategoriesOnProducts";
import { Company } from "../models/Company";
import { OrderItem } from "../models/OrderItem";
import { Platform } from "../models/Platform";
import { ProductsOnCounpon } from "../models/ProductsOnCounpon";
import { Room } from "../models/Room";
import { TagsOnProducts } from "../models/TagsOnProducts";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Product {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false,
    description: undefined,
  })
  published!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  title!: string;

  company?: Company;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  companyId!: string;

  categories?: CategoriesOnProducts[] | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true,
    description: undefined,
  })
  price?: number | null;

  platform?: Platform;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  platformId!: string;

  tags?: TagsOnProducts[] | null;

  orders?: OrderItem[] | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  slug!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  unit?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true,
    description: undefined,
  })
  salePrice?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined,
  })
  discountInPercent?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  image!: string;

  productsOnCounpon?: ProductsOnCounpon[] | null;

  room?: Room[] | null;
}
