import * as TypeGraphQL from "type-graphql";
import { PlatformCreateWithoutProductsInput } from "../inputs/PlatformCreateWithoutProductsInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PlatformCreateOneWithoutProductsInput {
  @TypeGraphQL.Field(_type => PlatformCreateWithoutProductsInput, {
    nullable: true,
    description: undefined
  })
  create?: PlatformCreateWithoutProductsInput | null;

  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: PlatformWhereUniqueInput | null;
}
