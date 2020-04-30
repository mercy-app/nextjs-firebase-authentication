import * as TypeGraphQL from "type-graphql";
import { ProductCreateWithoutProductsOnCounponInput } from "../inputs/ProductCreateWithoutProductsOnCounponInput";
import { ProductUpdateWithoutProductsOnCounponDataInput } from "../inputs/ProductUpdateWithoutProductsOnCounponDataInput";
import { ProductUpsertWithoutProductsOnCounponInput } from "../inputs/ProductUpsertWithoutProductsOnCounponInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductUpdateOneRequiredWithoutProductsOnCounponInput {
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

  @TypeGraphQL.Field(_type => ProductUpdateWithoutProductsOnCounponDataInput, {
    nullable: true,
    description: undefined
  })
  update?: ProductUpdateWithoutProductsOnCounponDataInput | null;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutProductsOnCounponInput, {
    nullable: true,
    description: undefined
  })
  upsert?: ProductUpsertWithoutProductsOnCounponInput | null;
}
