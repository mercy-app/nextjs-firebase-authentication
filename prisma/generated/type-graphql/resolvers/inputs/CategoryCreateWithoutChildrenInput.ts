import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPostsCreateManyWithoutCategoryInput } from "../inputs/CategoriesOnPostsCreateManyWithoutCategoryInput";
import { CategoriesOnProductsCreateManyWithoutCategoryInput } from "../inputs/CategoriesOnProductsCreateManyWithoutCategoryInput";
import { CategoryCreateOneWithoutChildrenInput } from "../inputs/CategoryCreateOneWithoutChildrenInput";
import { PlatformCreateOneWithoutCategoryInput } from "../inputs/PlatformCreateOneWithoutCategoryInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryCreateWithoutChildrenInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  slug!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  icon!: string;

  @TypeGraphQL.Field(_type => CategoryCreateOneWithoutChildrenInput, {
    nullable: true,
    description: undefined
  })
  parent?: CategoryCreateOneWithoutChildrenInput | null;

  @TypeGraphQL.Field(_type => CategoriesOnPostsCreateManyWithoutCategoryInput, {
    nullable: true,
    description: undefined
  })
  posts?: CategoriesOnPostsCreateManyWithoutCategoryInput | null;

  @TypeGraphQL.Field(_type => CategoriesOnProductsCreateManyWithoutCategoryInput, {
    nullable: true,
    description: undefined
  })
  products?: CategoriesOnProductsCreateManyWithoutCategoryInput | null;

  @TypeGraphQL.Field(_type => PlatformCreateOneWithoutCategoryInput, {
    nullable: true,
    description: undefined
  })
  platform?: PlatformCreateOneWithoutCategoryInput | null;
}
