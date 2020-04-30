import * as TypeGraphQL from "type-graphql";
import { StringFilter } from "../inputs/StringFilter";
import { TagsOnPostsFilter } from "../inputs/TagsOnPostsFilter";
import { TagsOnProductsFilter } from "../inputs/TagsOnProductsFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  title?: StringFilter | null;

  @TypeGraphQL.Field(_type => TagsOnPostsFilter, {
    nullable: true,
    description: undefined
  })
  posts?: TagsOnPostsFilter | null;

  @TypeGraphQL.Field(_type => TagsOnProductsFilter, {
    nullable: true,
    description: undefined
  })
  products?: TagsOnProductsFilter | null;

  @TypeGraphQL.Field(_type => [TagWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: TagWhereInput[] | null;

  @TypeGraphQL.Field(_type => [TagWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: TagWhereInput[] | null;

  @TypeGraphQL.Field(_type => [TagWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: TagWhereInput[] | null;
}
