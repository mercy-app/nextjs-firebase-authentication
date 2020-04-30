import * as TypeGraphQL from "type-graphql";
import { TagsOnPosts } from "../../../models/TagsOnPosts";
import { AggregateTagsOnPosts } from "../../outputs/AggregateTagsOnPosts";

@TypeGraphQL.Resolver(_of => TagsOnPosts)
export class AggregateTagsOnPostsResolver {
  @TypeGraphQL.Query(_returns => AggregateTagsOnPosts, {
    nullable: false,
    description: undefined
  })
  async aggregateTagsOnPosts(): Promise<AggregateTagsOnPosts> {
    return new AggregateTagsOnPosts();
  }
}
