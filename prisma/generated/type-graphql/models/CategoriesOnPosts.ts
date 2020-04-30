import * as TypeGraphQL from "type-graphql";
import { Category } from "../models/Category";
import { Post } from "../models/Post";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnPosts {
  post?: Post;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  postId!: string;

  category?: Category;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  categoryId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  createdAt!: Date;
}
