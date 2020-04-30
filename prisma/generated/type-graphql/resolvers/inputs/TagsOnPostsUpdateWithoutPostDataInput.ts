import * as TypeGraphQL from "type-graphql";
import { TagUpdateOneRequiredWithoutPostsInput } from "../inputs/TagUpdateOneRequiredWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnPostsUpdateWithoutPostDataInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  tag?: TagUpdateOneRequiredWithoutPostsInput | null;
}
