import * as TypeGraphQL from "type-graphql";
import { ProductUpdateOneRequiredWithoutTagsInput } from "../inputs/ProductUpdateOneRequiredWithoutTagsInput";
import { TagUpdateOneRequiredWithoutProductsInput } from "../inputs/TagUpdateOneRequiredWithoutProductsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnProductsUpdateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutTagsInput, {
    nullable: true,
    description: undefined
  })
  product?: ProductUpdateOneRequiredWithoutTagsInput | null;

  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutProductsInput, {
    nullable: true,
    description: undefined
  })
  tag?: TagUpdateOneRequiredWithoutProductsInput | null;
}
