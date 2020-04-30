import * as TypeGraphQL from "type-graphql";
import { ProductCreateWithoutOrdersInput } from "../inputs/ProductCreateWithoutOrdersInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductCreateOneWithoutOrdersInput {
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
}
