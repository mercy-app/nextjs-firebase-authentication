import * as TypeGraphQL from "type-graphql";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PostWhereInput } from "../inputs/PostWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnPostsWhereInput {
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

  @TypeGraphQL.Field(_type => [CategoriesOnPostsWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: CategoriesOnPostsWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnPostsWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: CategoriesOnPostsWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnPostsWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: CategoriesOnPostsWhereInput[] | null;

  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true,
    description: undefined
  })
  post?: PostWhereInput | null;

  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true,
    description: undefined
  })
  category?: CategoryWhereInput | null;
}
