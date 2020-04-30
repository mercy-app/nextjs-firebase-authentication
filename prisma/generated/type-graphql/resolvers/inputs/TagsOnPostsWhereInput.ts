import * as TypeGraphQL from "type-graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PostWhereInput } from "../inputs/PostWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { TagWhereInput } from "../inputs/TagWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnPostsWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  postId?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  tagId?: StringFilter | null;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | null;

  @TypeGraphQL.Field(_type => [TagsOnPostsWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: TagsOnPostsWhereInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnPostsWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: TagsOnPostsWhereInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnPostsWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: TagsOnPostsWhereInput[] | null;

  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true,
    description: undefined
  })
  post?: PostWhereInput | null;

  @TypeGraphQL.Field(_type => TagWhereInput, {
    nullable: true,
    description: undefined
  })
  tag?: TagWhereInput | null;
}
