import * as TypeGraphQL from "type-graphql";
import { TagsOnPostsCreateManyWithoutTagInput } from "../inputs/TagsOnPostsCreateManyWithoutTagInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagCreateWithoutProductsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  title!: string;

  @TypeGraphQL.Field(_type => TagsOnPostsCreateManyWithoutTagInput, {
    nullable: true,
    description: undefined
  })
  posts?: TagsOnPostsCreateManyWithoutTagInput | null;
}
