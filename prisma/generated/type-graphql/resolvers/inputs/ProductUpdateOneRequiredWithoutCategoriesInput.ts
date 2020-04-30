import * as TypeGraphQL from "type-graphql";
import { ProductCreateWithoutCategoriesInput } from "../inputs/ProductCreateWithoutCategoriesInput";
import { ProductUpdateWithoutCategoriesDataInput } from "../inputs/ProductUpdateWithoutCategoriesDataInput";
import { ProductUpsertWithoutCategoriesInput } from "../inputs/ProductUpsertWithoutCategoriesInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductUpdateOneRequiredWithoutCategoriesInput {
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

  @TypeGraphQL.Field(_type => ProductUpdateWithoutCategoriesDataInput, {
    nullable: true,
    description: undefined
  })
  update?: ProductUpdateWithoutCategoriesDataInput | null;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutCategoriesInput, {
    nullable: true,
    description: undefined
  })
  upsert?: ProductUpsertWithoutCategoriesInput | null;
}
