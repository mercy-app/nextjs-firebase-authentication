import * as TypeGraphQL from "type-graphql";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductFilter {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: ProductWhereInput | null;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: ProductWhereInput | null;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: ProductWhereInput | null;
}
