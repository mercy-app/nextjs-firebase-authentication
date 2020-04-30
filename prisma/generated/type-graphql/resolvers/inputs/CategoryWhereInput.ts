import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPostsFilter } from "../inputs/CategoriesOnPostsFilter";
import { CategoriesOnProductsFilter } from "../inputs/CategoriesOnProductsFilter";
import { CategoryFilter } from "../inputs/CategoryFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { PlatformWhereInput } from "../inputs/PlatformWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  title?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  slug?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  type?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  icon?: StringFilter | null;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  categoryId?: NullableStringFilter | null;

  @TypeGraphQL.Field(_type => CategoryFilter, {
    nullable: true,
    description: undefined
  })
  children?: CategoryFilter | null;

  @TypeGraphQL.Field(_type => CategoriesOnPostsFilter, {
    nullable: true,
    description: undefined
  })
  posts?: CategoriesOnPostsFilter | null;

  @TypeGraphQL.Field(_type => CategoriesOnProductsFilter, {
    nullable: true,
    description: undefined
  })
  products?: CategoriesOnProductsFilter | null;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  platformId?: NullableStringFilter | null;

  @TypeGraphQL.Field(_type => [CategoryWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: CategoryWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CategoryWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: CategoryWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CategoryWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: CategoryWhereInput[] | null;

  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true,
    description: undefined
  })
  parent?: CategoryWhereInput | null;

  @TypeGraphQL.Field(_type => PlatformWhereInput, {
    nullable: true,
    description: undefined
  })
  platform?: PlatformWhereInput | null;
}
