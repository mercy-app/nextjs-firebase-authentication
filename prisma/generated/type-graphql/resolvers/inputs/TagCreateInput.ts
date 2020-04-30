import * as TypeGraphQL from "type-graphql";
import { TagsOnPostsCreateManyWithoutTagInput } from "../inputs/TagsOnPostsCreateManyWithoutTagInput";
import { TagsOnProductsCreateManyWithoutTagInput } from "../inputs/TagsOnProductsCreateManyWithoutTagInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @TypeGraphQL.Field(_type => TagsOnPostsCreateManyWithoutTagInput, {
    nullable: true,
    description: undefined
  })
  posts?: TagsOnPostsCreateManyWithoutTagInput | null;

  @TypeGraphQL.Field(_type => TagsOnProductsCreateManyWithoutTagInput, {
    nullable: true,
    description: undefined
  })
  products?: TagsOnProductsCreateManyWithoutTagInput | null;
}
