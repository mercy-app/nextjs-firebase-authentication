import * as TypeGraphQL from "type-graphql";
import { CategoryUpdateOneRequiredWithoutPostsInput } from "../inputs/CategoryUpdateOneRequiredWithoutPostsInput";
import { PostUpdateOneRequiredWithoutCategoriesInput } from "../inputs/PostUpdateOneRequiredWithoutCategoriesInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnPostsUpdateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutCategoriesInput, {
    nullable: true,
    description: undefined
  })
  post?: PostUpdateOneRequiredWithoutCategoriesInput | null;

  @TypeGraphQL.Field(_type => CategoryUpdateOneRequiredWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  category?: CategoryUpdateOneRequiredWithoutPostsInput | null;
}
