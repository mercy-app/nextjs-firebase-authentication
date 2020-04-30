import * as TypeGraphQL from "type-graphql";
import { BooleanFilter } from "../inputs/BooleanFilter";
import { CategoriesOnPostsFilter } from "../inputs/CategoriesOnPostsFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TagsOnPostsFilter } from "../inputs/TagsOnPostsFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PostScalarWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | null;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | null;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  updatedAt?: DateTimeFilter | null;

  @TypeGraphQL.Field(_type => BooleanFilter, {
    nullable: true,
    description: undefined
  })
  published?: BooleanFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  title?: StringFilter | null;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  content?: NullableStringFilter | null;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  authorId?: NullableStringFilter | null;

  @TypeGraphQL.Field(_type => CategoriesOnPostsFilter, {
    nullable: true,
    description: undefined
  })
  categories?: CategoriesOnPostsFilter | null;

  @TypeGraphQL.Field(_type => TagsOnPostsFilter, {
    nullable: true,
    description: undefined
  })
  tags?: TagsOnPostsFilter | null;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: PostScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: PostScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: PostScalarWhereInput[] | null;
}
