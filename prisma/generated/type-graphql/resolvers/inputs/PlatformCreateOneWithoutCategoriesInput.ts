import * as TypeGraphQL from "type-graphql";
import { PlatformCreateWithoutCategoriesInput } from "../inputs/PlatformCreateWithoutCategoriesInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PlatformCreateOneWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => PlatformCreateWithoutCategoriesInput, {
    nullable: true,
    description: undefined
  })
  create?: PlatformCreateWithoutCategoriesInput | null;

  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: PlatformWhereUniqueInput | null;
}
