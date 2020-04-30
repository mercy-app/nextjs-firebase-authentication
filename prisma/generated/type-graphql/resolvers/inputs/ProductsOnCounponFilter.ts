import * as TypeGraphQL from "type-graphql";
import { ProductsOnCounponWhereInput } from "../inputs/ProductsOnCounponWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductsOnCounponFilter {
  @TypeGraphQL.Field(_type => ProductsOnCounponWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: ProductsOnCounponWhereInput | null;

  @TypeGraphQL.Field(_type => ProductsOnCounponWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: ProductsOnCounponWhereInput | null;

  @TypeGraphQL.Field(_type => ProductsOnCounponWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: ProductsOnCounponWhereInput | null;
}
