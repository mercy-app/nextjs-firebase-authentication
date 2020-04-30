import * as TypeGraphQL from "type-graphql";
import { PostUpdateOneRequiredWithoutTagsInput } from "../inputs/PostUpdateOneRequiredWithoutTagsInput";
import { TagUpdateOneRequiredWithoutPostsInput } from "../inputs/TagUpdateOneRequiredWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnPostsUpdateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutTagsInput, {
    nullable: true,
    description: undefined
  })
  post?: PostUpdateOneRequiredWithoutTagsInput | null;

  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  tag?: TagUpdateOneRequiredWithoutPostsInput | null;
}
