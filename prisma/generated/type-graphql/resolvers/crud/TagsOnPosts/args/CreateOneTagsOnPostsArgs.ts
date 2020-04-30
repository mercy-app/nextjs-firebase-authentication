import * as TypeGraphQL from "type-graphql";
import { TagsOnPostsCreateInput } from "../../../inputs/TagsOnPostsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTagsOnPostsArgs {
  @TypeGraphQL.Field(_type => TagsOnPostsCreateInput, { nullable: false })
  data!: TagsOnPostsCreateInput;
}
