import * as TypeGraphQL from "type-graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnPostsScalarWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  postId?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  categoryId?: StringFilter | null;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | null;

  @TypeGraphQL.Field(_type => [CategoriesOnPostsScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: CategoriesOnPostsScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnPostsScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: CategoriesOnPostsScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnPostsScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: CategoriesOnPostsScalarWhereInput[] | null;
}
