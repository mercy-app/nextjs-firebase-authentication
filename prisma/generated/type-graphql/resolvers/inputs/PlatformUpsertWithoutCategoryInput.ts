import * as TypeGraphQL from "type-graphql";
import { PlatformCreateWithoutCategoryInput } from "../inputs/PlatformCreateWithoutCategoryInput";
import { PlatformUpdateWithoutCategoryDataInput } from "../inputs/PlatformUpdateWithoutCategoryDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PlatformUpsertWithoutCategoryInput {
  @TypeGraphQL.Field(_type => PlatformUpdateWithoutCategoryDataInput, {
    nullable: false,
    description: undefined
  })
  update!: PlatformUpdateWithoutCategoryDataInput;

  @TypeGraphQL.Field(_type => PlatformCreateWithoutCategoryInput, {
    nullable: false,
    description: undefined
  })
  create!: PlatformCreateWithoutCategoryInput;
}
