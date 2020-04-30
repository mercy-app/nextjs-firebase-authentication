import * as TypeGraphQL from "type-graphql";
import { TagsOnPostsWhereUniqueInput } from "../../../inputs/TagsOnPostsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneTagsOnPostsArgs {
  @TypeGraphQL.Field(_type => TagsOnPostsWhereUniqueInput, { nullable: false })
  where!: TagsOnPostsWhereUniqueInput;
}
