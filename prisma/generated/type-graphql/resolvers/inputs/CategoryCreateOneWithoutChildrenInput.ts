import * as TypeGraphQL from "type-graphql";
import { CategoryCreateWithoutChildrenInput } from "../inputs/CategoryCreateWithoutChildrenInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryCreateOneWithoutChildrenInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutChildrenInput, {
    nullable: true,
    description: undefined
  })
  create?: CategoryCreateWithoutChildrenInput | null;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: CategoryWhereUniqueInput | null;
}
