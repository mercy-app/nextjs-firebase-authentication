import * as TypeGraphQL from "type-graphql";
import { ProductsOnCounponCreateWithoutProductInput } from "../inputs/ProductsOnCounponCreateWithoutProductInput";
import { ProductsOnCounponUpdateWithoutProductDataInput } from "../inputs/ProductsOnCounponUpdateWithoutProductDataInput";
import { ProductsOnCounponWhereUniqueInput } from "../inputs/ProductsOnCounponWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductsOnCounponUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => ProductsOnCounponWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: ProductsOnCounponWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsOnCounponUpdateWithoutProductDataInput, {
    nullable: false,
    description: undefined
  })
  update!: ProductsOnCounponUpdateWithoutProductDataInput;

  @TypeGraphQL.Field(_type => ProductsOnCounponCreateWithoutProductInput, {
    nullable: false,
    description: undefined
  })
  create!: ProductsOnCounponCreateWithoutProductInput;
}
