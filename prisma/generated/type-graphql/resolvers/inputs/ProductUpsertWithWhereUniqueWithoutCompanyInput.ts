import * as TypeGraphQL from "type-graphql";
import { ProductCreateWithoutCompanyInput } from "../inputs/ProductCreateWithoutCompanyInput";
import { ProductUpdateWithoutCompanyDataInput } from "../inputs/ProductUpdateWithoutCompanyDataInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductUpsertWithWhereUniqueWithoutCompanyInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutCompanyDataInput, {
    nullable: false,
    description: undefined
  })
  update!: ProductUpdateWithoutCompanyDataInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutCompanyInput, {
    nullable: false,
    description: undefined
  })
  create!: ProductCreateWithoutCompanyInput;
}
