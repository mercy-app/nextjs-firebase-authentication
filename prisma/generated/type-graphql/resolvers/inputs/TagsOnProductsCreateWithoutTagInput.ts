import * as TypeGraphQL from "type-graphql";
import { ProductCreateOneWithoutTagsInput } from "../inputs/ProductCreateOneWithoutTagsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnProductsCreateWithoutTagInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => ProductCreateOneWithoutTagsInput, {
    nullable: false,
    description: undefined
  })
  product!: ProductCreateOneWithoutTagsInput;
}
