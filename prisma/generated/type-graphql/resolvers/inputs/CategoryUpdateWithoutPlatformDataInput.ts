import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPostsUpdateManyWithoutCategoryInput } from "../inputs/CategoriesOnPostsUpdateManyWithoutCategoryInput";
import { CategoriesOnProductsUpdateManyWithoutCategoryInput } from "../inputs/CategoriesOnProductsUpdateManyWithoutCategoryInput";
import { CategoryUpdateManyWithoutParentInput } from "../inputs/CategoryUpdateManyWithoutParentInput";
import { CategoryUpdateOneWithoutChildrenInput } from "../inputs/CategoryUpdateOneWithoutChildrenInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryUpdateWithoutPlatformDataInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  slug?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  type?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  icon?: string | null;

  @TypeGraphQL.Field(_type => CategoryUpdateOneWithoutChildrenInput, {
    nullable: true,
    description: undefined
  })
  parent?: CategoryUpdateOneWithoutChildrenInput | null;

  @TypeGraphQL.Field(_type => CategoryUpdateManyWithoutParentInput, {
    nullable: true,
    description: undefined
  })
  children?: CategoryUpdateManyWithoutParentInput | null;

  @TypeGraphQL.Field(_type => CategoriesOnPostsUpdateManyWithoutCategoryInput, {
    nullable: true,
    description: undefined
  })
  posts?: CategoriesOnPostsUpdateManyWithoutCategoryInput | null;

  @TypeGraphQL.Field(_type => CategoriesOnProductsUpdateManyWithoutCategoryInput, {
    nullable: true,
    description: undefined
  })
  products?: CategoriesOnProductsUpdateManyWithoutCategoryInput | null;
}
