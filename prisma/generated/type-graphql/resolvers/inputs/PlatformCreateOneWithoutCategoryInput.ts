import * as TypeGraphQL from "type-graphql";
import { PlatformCreateWithoutCategoryInput } from "../inputs/PlatformCreateWithoutCategoryInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PlatformCreateOneWithoutCategoryInput {
  @TypeGraphQL.Field(_type => PlatformCreateWithoutCategoryInput, {
    nullable: true,
    description: undefined
  })
  create?: PlatformCreateWithoutCategoryInput | null;

  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: PlatformWhereUniqueInput | null;
}
