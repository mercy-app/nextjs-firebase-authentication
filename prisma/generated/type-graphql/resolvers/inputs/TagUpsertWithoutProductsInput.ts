import * as TypeGraphQL from "type-graphql";
import { TagCreateWithoutProductsInput } from "../inputs/TagCreateWithoutProductsInput";
import { TagUpdateWithoutProductsDataInput } from "../inputs/TagUpdateWithoutProductsDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagUpsertWithoutProductsInput {
  @TypeGraphQL.Field(_type => TagUpdateWithoutProductsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: TagUpdateWithoutProductsDataInput;

  @TypeGraphQL.Field(_type => TagCreateWithoutProductsInput, {
    nullable: false,
    description: undefined
  })
  create!: TagCreateWithoutProductsInput;
}
