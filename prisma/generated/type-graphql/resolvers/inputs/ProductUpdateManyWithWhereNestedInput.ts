import * as TypeGraphQL from "type-graphql";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyDataInput } from "../inputs/ProductUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => ProductScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: ProductScalarWhereInput;

  @TypeGraphQL.Field(_type => ProductUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: ProductUpdateManyDataInput;
}
