import * as TypeGraphQL from "type-graphql";
import { ProductCreateWithoutOrdersInput } from "../inputs/ProductCreateWithoutOrdersInput";
import { ProductUpdateWithoutOrdersDataInput } from "../inputs/ProductUpdateWithoutOrdersDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductUpsertWithoutOrdersInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutOrdersDataInput, {
    nullable: false,
    description: undefined
  })
  update!: ProductUpdateWithoutOrdersDataInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutOrdersInput, {
    nullable: false,
    description: undefined
  })
  create!: ProductCreateWithoutOrdersInput;
}
