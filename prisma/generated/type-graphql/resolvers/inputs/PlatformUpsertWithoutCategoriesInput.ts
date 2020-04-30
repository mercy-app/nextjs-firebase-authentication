import * as TypeGraphQL from "type-graphql";
import { PlatformCreateWithoutCategoriesInput } from "../inputs/PlatformCreateWithoutCategoriesInput";
import { PlatformUpdateWithoutCategoriesDataInput } from "../inputs/PlatformUpdateWithoutCategoriesDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PlatformUpsertWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => PlatformUpdateWithoutCategoriesDataInput, {
    nullable: false,
    description: undefined
  })
  update!: PlatformUpdateWithoutCategoriesDataInput;

  @TypeGraphQL.Field(_type => PlatformCreateWithoutCategoriesInput, {
    nullable: false,
    description: undefined
  })
  create!: PlatformCreateWithoutCategoriesInput;
}
