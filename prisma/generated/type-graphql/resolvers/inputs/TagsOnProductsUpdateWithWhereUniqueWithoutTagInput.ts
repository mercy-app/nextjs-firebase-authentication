import * as TypeGraphQL from "type-graphql";
import { TagsOnProductsUpdateWithoutTagDataInput } from "../inputs/TagsOnProductsUpdateWithoutTagDataInput";
import { TagsOnProductsWhereUniqueInput } from "../inputs/TagsOnProductsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnProductsUpdateWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => TagsOnProductsWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: TagsOnProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnProductsUpdateWithoutTagDataInput, {
    nullable: false,
    description: undefined
  })
  data!: TagsOnProductsUpdateWithoutTagDataInput;
}
