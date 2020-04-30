import * as TypeGraphQL from "type-graphql";
import { ProductsOnCounponUpdateWithoutProductDataInput } from "../inputs/ProductsOnCounponUpdateWithoutProductDataInput";
import { ProductsOnCounponWhereUniqueInput } from "../inputs/ProductsOnCounponWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductsOnCounponUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => ProductsOnCounponWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: ProductsOnCounponWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsOnCounponUpdateWithoutProductDataInput, {
    nullable: false,
    description: undefined
  })
  data!: ProductsOnCounponUpdateWithoutProductDataInput;
}
