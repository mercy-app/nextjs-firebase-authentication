import * as TypeGraphQL from "type-graphql";
import { ProductCreateOneWithoutTagsInput } from "../inputs/ProductCreateOneWithoutTagsInput";
import { TagCreateOneWithoutProductsInput } from "../inputs/TagCreateOneWithoutProductsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnProductsCreateInput {
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

  @TypeGraphQL.Field(_type => TagCreateOneWithoutProductsInput, {
    nullable: false,
    description: undefined
  })
  tag!: TagCreateOneWithoutProductsInput;
}
