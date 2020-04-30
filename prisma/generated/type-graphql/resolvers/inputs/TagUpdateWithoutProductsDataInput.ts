import * as TypeGraphQL from "type-graphql";
import { TagsOnPostsUpdateManyWithoutTagInput } from "../inputs/TagsOnPostsUpdateManyWithoutTagInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagUpdateWithoutProductsDataInput {
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

  @TypeGraphQL.Field(_type => TagsOnPostsUpdateManyWithoutTagInput, {
    nullable: true,
    description: undefined
  })
  posts?: TagsOnPostsUpdateManyWithoutTagInput | null;
}
