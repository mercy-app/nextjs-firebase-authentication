import * as TypeGraphQL from "type-graphql";
import { PlatformCreateWithoutCategoriesInput } from "../inputs/PlatformCreateWithoutCategoriesInput";
import { PlatformUpdateWithoutCategoriesDataInput } from "../inputs/PlatformUpdateWithoutCategoriesDataInput";
import { PlatformUpsertWithoutCategoriesInput } from "../inputs/PlatformUpsertWithoutCategoriesInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PlatformUpdateOneRequiredWithoutCategoriesInput {
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

  @TypeGraphQL.Field(_type => PlatformUpdateWithoutCategoriesDataInput, {
    nullable: true,
    description: undefined
  })
  update?: PlatformUpdateWithoutCategoriesDataInput | null;

  @TypeGraphQL.Field(_type => PlatformUpsertWithoutCategoriesInput, {
    nullable: true,
    description: undefined
  })
  upsert?: PlatformUpsertWithoutCategoriesInput | null;
}
