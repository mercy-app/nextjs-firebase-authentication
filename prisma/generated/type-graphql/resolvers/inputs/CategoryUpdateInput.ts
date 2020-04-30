import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPostsUpdateManyWithoutCategoryInput } from "../inputs/CategoriesOnPostsUpdateManyWithoutCategoryInput";
import { CategoriesOnProductsUpdateManyWithoutCategoryInput } from "../inputs/CategoriesOnProductsUpdateManyWithoutCategoryInput";
import { CategoryUpdateManyWithoutParentInput } from "../inputs/CategoryUpdateManyWithoutParentInput";
import { CategoryUpdateOneWithoutChildrenInput } from "../inputs/CategoryUpdateOneWithoutChildrenInput";
import { PlatformUpdateOneRequiredWithoutCategoriesInput } from "../inputs/PlatformUpdateOneRequiredWithoutCategoriesInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryUpdateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name?: string | null;

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

  @TypeGraphQL.Field(_type => PlatformUpdateOneRequiredWithoutCategoriesInput, {
    nullable: true,
    description: undefined
  })
  platform?: PlatformUpdateOneRequiredWithoutCategoriesInput | null;
}
