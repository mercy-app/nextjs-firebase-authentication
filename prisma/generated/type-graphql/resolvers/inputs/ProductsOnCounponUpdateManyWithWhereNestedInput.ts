import * as TypeGraphQL from "type-graphql";
import { ProductsOnCounponScalarWhereInput } from "../inputs/ProductsOnCounponScalarWhereInput";
import { ProductsOnCounponUpdateManyDataInput } from "../inputs/ProductsOnCounponUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductsOnCounponUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => ProductsOnCounponScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: ProductsOnCounponScalarWhereInput;

  @TypeGraphQL.Field(_type => ProductsOnCounponUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: ProductsOnCounponUpdateManyDataInput;
}
