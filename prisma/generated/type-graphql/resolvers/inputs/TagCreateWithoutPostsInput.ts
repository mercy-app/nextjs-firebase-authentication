import * as TypeGraphQL from "type-graphql";
import { TagsOnProductsCreateManyWithoutTagInput } from "../inputs/TagsOnProductsCreateManyWithoutTagInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagCreateWithoutPostsInput {
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

  @TypeGraphQL.Field(_type => TagsOnProductsCreateManyWithoutTagInput, {
    nullable: true,
    description: undefined
  })
  products?: TagsOnProductsCreateManyWithoutTagInput | null;
}
