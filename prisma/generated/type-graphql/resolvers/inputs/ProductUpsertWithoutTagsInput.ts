import * as TypeGraphQL from "type-graphql";
import { ProductCreateWithoutTagsInput } from "../inputs/ProductCreateWithoutTagsInput";
import { ProductUpdateWithoutTagsDataInput } from "../inputs/ProductUpdateWithoutTagsDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductUpsertWithoutTagsInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutTagsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: ProductUpdateWithoutTagsDataInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutTagsInput, {
    nullable: false,
    description: undefined
  })
  create!: ProductCreateWithoutTagsInput;
}
