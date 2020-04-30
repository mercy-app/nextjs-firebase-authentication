import * as TypeGraphQL from "type-graphql";
import { TagsOnProductsUpdateManyWithoutTagInput } from "../inputs/TagsOnProductsUpdateManyWithoutTagInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagUpdateWithoutPostsDataInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => TagsOnProductsUpdateManyWithoutTagInput, {
    nullable: true,
    description: undefined
  })
  products?: TagsOnProductsUpdateManyWithoutTagInput | null;
}
