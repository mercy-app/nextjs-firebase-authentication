import * as TypeGraphQL from "type-graphql";
import { TagsOnPostsWhereInput } from "../inputs/TagsOnPostsWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnPostsFilter {
  @TypeGraphQL.Field(_type => TagsOnPostsWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: TagsOnPostsWhereInput | null;

  @TypeGraphQL.Field(_type => TagsOnPostsWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: TagsOnPostsWhereInput | null;

  @TypeGraphQL.Field(_type => TagsOnPostsWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: TagsOnPostsWhereInput | null;
}
