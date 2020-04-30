import * as TypeGraphQL from "type-graphql";
import { ProductUpdateOneRequiredWithoutTagsInput } from "../inputs/ProductUpdateOneRequiredWithoutTagsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnProductsUpdateWithoutTagDataInput {
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
}
