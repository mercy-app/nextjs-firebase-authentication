import * as TypeGraphQL from "type-graphql";
import { PlatformCreateWithoutProductsInput } from "../inputs/PlatformCreateWithoutProductsInput";
import { PlatformUpdateWithoutProductsDataInput } from "../inputs/PlatformUpdateWithoutProductsDataInput";
import { PlatformUpsertWithoutProductsInput } from "../inputs/PlatformUpsertWithoutProductsInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PlatformUpdateOneRequiredWithoutProductsInput {
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

  @TypeGraphQL.Field(_type => PlatformUpdateWithoutProductsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: PlatformUpdateWithoutProductsDataInput | null;

  @TypeGraphQL.Field(_type => PlatformUpsertWithoutProductsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: PlatformUpsertWithoutProductsInput | null;
}
