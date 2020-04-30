import * as TypeGraphQL from "type-graphql";
import { PostIdTagIdCompoundUniqueInput } from "../inputs/PostIdTagIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnPostsWhereUniqueInput {
  @TypeGraphQL.Field(_type => PostIdTagIdCompoundUniqueInput, {
    nullable: true,
    description: undefined
  })
  postId_tagId?: PostIdTagIdCompoundUniqueInput | null;
}
