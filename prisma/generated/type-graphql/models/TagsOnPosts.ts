import * as TypeGraphQL from "type-graphql";
import { Post } from "../models/Post";
import { Tag } from "../models/Tag";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnPosts {
  post?: Post;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  postId!: string;

  tag?: Tag;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  tagId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  createdAt!: Date;
}
