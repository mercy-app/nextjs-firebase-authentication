import * as TypeGraphQL from "type-graphql";
import { TagsOnPosts } from "../models/TagsOnPosts";
import { TagsOnProducts } from "../models/TagsOnProducts";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Tag {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  name!: string;

  posts?: TagsOnPosts[] | null;

  products?: TagsOnProducts[] | null;
}
