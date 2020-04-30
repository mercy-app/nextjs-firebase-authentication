import * as TypeGraphQL from "type-graphql";
import { TagsOnProductsCreateWithoutProductInput } from "../inputs/TagsOnProductsCreateWithoutProductInput";
import { TagsOnProductsUpdateWithoutProductDataInput } from "../inputs/TagsOnProductsUpdateWithoutProductDataInput";
import { TagsOnProductsWhereUniqueInput } from "../inputs/TagsOnProductsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnProductsUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => TagsOnProductsWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: TagsOnProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnProductsUpdateWithoutProductDataInput, {
    nullable: false,
    description: undefined
  })
  update!: TagsOnProductsUpdateWithoutProductDataInput;

  @TypeGraphQL.Field(_type => TagsOnProductsCreateWithoutProductInput, {
    nullable: false,
    description: undefined
  })
  create!: TagsOnProductsCreateWithoutProductInput;
}
