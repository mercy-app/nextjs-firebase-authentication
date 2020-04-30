import * as TypeGraphQL from "type-graphql";
import { TagsOnPostsWhereInput } from "../../../inputs/TagsOnPostsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTagsOnPostsArgs {
  @TypeGraphQL.Field(_type => TagsOnPostsWhereInput, { nullable: true })
  where?: TagsOnPostsWhereInput | null;
}
