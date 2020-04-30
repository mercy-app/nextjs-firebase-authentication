import * as TypeGraphQL from "type-graphql";
import { TagsOnProductsUpdateWithoutProductDataInput } from "../inputs/TagsOnProductsUpdateWithoutProductDataInput";
import { TagsOnProductsWhereUniqueInput } from "../inputs/TagsOnProductsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnProductsUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => TagsOnProductsWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: TagsOnProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnProductsUpdateWithoutProductDataInput, {
    nullable: false,
    description: undefined
  })
  data!: TagsOnProductsUpdateWithoutProductDataInput;
}
