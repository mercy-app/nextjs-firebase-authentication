import * as TypeGraphQL from "type-graphql";
import { PlatformCreateWithoutProductsInput } from "../inputs/PlatformCreateWithoutProductsInput";
import { PlatformUpdateWithoutProductsDataInput } from "../inputs/PlatformUpdateWithoutProductsDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PlatformUpsertWithoutProductsInput {
  @TypeGraphQL.Field(_type => PlatformUpdateWithoutProductsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: PlatformUpdateWithoutProductsDataInput;

  @TypeGraphQL.Field(_type => PlatformCreateWithoutProductsInput, {
    nullable: false,
    description: undefined
  })
  create!: PlatformCreateWithoutProductsInput;
}
