import * as TypeGraphQL from "type-graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnPostsScalarWhereInput {
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

  @TypeGraphQL.Field(_type => [TagsOnPostsScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: TagsOnPostsScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnPostsScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: TagsOnPostsScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnPostsScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: TagsOnPostsScalarWhereInput[] | null;
}
