import * as TypeGraphQL from "type-graphql";
import { PlatformCreateWithoutCategoryInput } from "../inputs/PlatformCreateWithoutCategoryInput";
import { PlatformUpdateWithoutCategoryDataInput } from "../inputs/PlatformUpdateWithoutCategoryDataInput";
import { PlatformUpsertWithoutCategoryInput } from "../inputs/PlatformUpsertWithoutCategoryInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PlatformUpdateOneWithoutCategoryInput {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  disconnect?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  delete?: boolean | null;

  @TypeGraphQL.Field(_type => PlatformUpdateWithoutCategoryDataInput, {
    nullable: true,
    description: undefined
  })
  update?: PlatformUpdateWithoutCategoryDataInput | null;

  @TypeGraphQL.Field(_type => PlatformUpsertWithoutCategoryInput, {
    nullable: true,
    description: undefined
  })
  upsert?: PlatformUpsertWithoutCategoryInput | null;
}
