import * as TypeGraphQL from "type-graphql";
import { ProductCreateWithoutTagsInput } from "../inputs/ProductCreateWithoutTagsInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductCreateOneWithoutTagsInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutTagsInput, {
    nullable: true,
    description: undefined
  })
  create?: ProductCreateWithoutTagsInput | null;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: ProductWhereUniqueInput | null;
}
