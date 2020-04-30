import * as TypeGraphQL from "type-graphql";
import { ProductCreateWithoutCompanyInput } from "../inputs/ProductCreateWithoutCompanyInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductCreateManyWithoutCompanyInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutCompanyInput], {
    nullable: true,
    description: undefined
  })
  create?: ProductCreateWithoutCompanyInput[] | null;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: ProductWhereUniqueInput[] | null;
}
