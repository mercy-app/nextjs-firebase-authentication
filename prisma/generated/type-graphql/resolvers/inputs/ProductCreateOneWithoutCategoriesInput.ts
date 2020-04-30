import * as TypeGraphQL from "type-graphql";
import { ProductCreateWithoutCategoriesInput } from "../inputs/ProductCreateWithoutCategoriesInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductCreateOneWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutCategoriesInput, {
    nullable: true,
    description: undefined
  })
  create?: ProductCreateWithoutCategoriesInput | null;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: ProductWhereUniqueInput | null;
}
