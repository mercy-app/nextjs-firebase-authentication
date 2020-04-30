import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPosts } from "../models/CategoriesOnPosts";
import { CategoriesOnProducts } from "../models/CategoriesOnProducts";
import { Platform } from "../models/Platform";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Category {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  slug!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  icon!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  categoryId?: string | null;

  parent?: Category | null;

  children?: Category[] | null;

  posts?: CategoriesOnPosts[] | null;

  products?: CategoriesOnProducts[] | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  platformId!: string;

  platform?: Platform;
}
