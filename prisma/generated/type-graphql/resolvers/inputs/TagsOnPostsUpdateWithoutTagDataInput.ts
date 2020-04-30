import * as TypeGraphQL from "type-graphql";
import { PostUpdateOneRequiredWithoutTagsInput } from "../inputs/PostUpdateOneRequiredWithoutTagsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnPostsUpdateWithoutTagDataInput {
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
}
