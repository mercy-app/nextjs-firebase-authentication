import * as TypeGraphQL from "type-graphql";
import { TagsOnProductsCreateWithoutTagInput } from "../inputs/TagsOnProductsCreateWithoutTagInput";
import { TagsOnProductsUpdateWithoutTagDataInput } from "../inputs/TagsOnProductsUpdateWithoutTagDataInput";
import { TagsOnProductsWhereUniqueInput } from "../inputs/TagsOnProductsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnProductsUpsertWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => TagsOnProductsWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: TagsOnProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnProductsUpdateWithoutTagDataInput, {
    nullable: false,
    description: undefined
  })
  update!: TagsOnProductsUpdateWithoutTagDataInput;

  @TypeGraphQL.Field(_type => TagsOnProductsCreateWithoutTagInput, {
    nullable: false,
    description: undefined
  })
  create!: TagsOnProductsCreateWithoutTagInput;
}
