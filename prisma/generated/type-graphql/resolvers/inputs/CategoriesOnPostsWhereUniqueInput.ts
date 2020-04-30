import * as TypeGraphQL from "type-graphql";
import { PostIdCategoryIdCompoundUniqueInput } from "../inputs/PostIdCategoryIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnPostsWhereUniqueInput {
  @TypeGraphQL.Field(_type => PostIdCategoryIdCompoundUniqueInput, {
    nullable: true,
    description: undefined
  })
  postId_categoryId?: PostIdCategoryIdCompoundUniqueInput | null;
}
