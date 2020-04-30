import * as TypeGraphQL from "type-graphql";
import { ProductCreateWithoutProductsOnCounponInput } from "../inputs/ProductCreateWithoutProductsOnCounponInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductCreateOneWithoutProductsOnCounponInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutProductsOnCounponInput, {
    nullable: true,
    description: undefined
  })
  create?: ProductCreateWithoutProductsOnCounponInput | null;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: ProductWhereUniqueInput | null;
}
