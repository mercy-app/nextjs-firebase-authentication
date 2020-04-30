import * as TypeGraphQL from "type-graphql";
import { ProductUpdateWithoutCompanyDataInput } from "../inputs/ProductUpdateWithoutCompanyDataInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductUpdateWithWhereUniqueWithoutCompanyInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutCompanyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: ProductUpdateWithoutCompanyDataInput;
}
