import * as TypeGraphQL from "type-graphql";
import { TagUpdateOneRequiredWithoutProductsInput } from "../inputs/TagUpdateOneRequiredWithoutProductsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnProductsUpdateWithoutProductDataInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutProductsInput, {
    nullable: true,
    description: undefined
  })
  tag?: TagUpdateOneRequiredWithoutProductsInput | null;
}
