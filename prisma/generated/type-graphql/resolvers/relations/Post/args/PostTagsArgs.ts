import * as TypeGraphQL from "type-graphql";
import { TagsOnPostsOrderByInput } from "../../../inputs/TagsOnPostsOrderByInput";
import { TagsOnPostsWhereInput } from "../../../inputs/TagsOnPostsWhereInput";
import { TagsOnPostsWhereUniqueInput } from "../../../inputs/TagsOnPostsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class PostTagsArgs {
  @TypeGraphQL.Field(_type => TagsOnPostsWhereInput, { nullable: true })
  where?: TagsOnPostsWhereInput | null;

  @TypeGraphQL.Field(_type => TagsOnPostsOrderByInput, { nullable: true })
  orderBy?: TagsOnPostsOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => TagsOnPostsWhereUniqueInput, { nullable: true })
  after?: TagsOnPostsWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TagsOnPostsWhereUniqueInput, { nullable: true })
  before?: TagsOnPostsWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
