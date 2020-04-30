import * as TypeGraphQL from "type-graphql";
import { ProductCreateWithoutOrdersInput } from "../inputs/ProductCreateWithoutOrdersInput";
import { ProductUpdateWithoutOrdersDataInput } from "../inputs/ProductUpdateWithoutOrdersDataInput";
import { ProductUpsertWithoutOrdersInput } from "../inputs/ProductUpsertWithoutOrdersInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductUpdateOneRequiredWithoutOrdersInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutOrdersInput, {
    nullable: true,
    description: undefined
  })
  create?: ProductCreateWithoutOrdersInput | null;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: ProductWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutOrdersDataInput, {
    nullable: true,
    description: undefined
  })
  update?: ProductUpdateWithoutOrdersDataInput | null;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutOrdersInput, {
    nullable: true,
    description: undefined
  })
  upsert?: ProductUpsertWithoutOrdersInput | null;
}
