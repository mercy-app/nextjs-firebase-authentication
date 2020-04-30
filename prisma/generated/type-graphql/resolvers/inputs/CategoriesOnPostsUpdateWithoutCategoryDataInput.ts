import * as TypeGraphQL from "type-graphql";
import { PostUpdateOneRequiredWithoutCategoriesInput } from "../inputs/PostUpdateOneRequiredWithoutCategoriesInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnPostsUpdateWithoutCategoryDataInput {
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
}
