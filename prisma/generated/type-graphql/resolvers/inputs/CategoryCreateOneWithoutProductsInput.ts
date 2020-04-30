import * as TypeGraphQL from "type-graphql";
import { CategoryCreateWithoutProductsInput } from "../inputs/CategoryCreateWithoutProductsInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryCreateOneWithoutProductsInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutProductsInput, {
    nullable: true,
    description: undefined
  })
  create?: CategoryCreateWithoutProductsInput | null;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: CategoryWhereUniqueInput | null;
}
