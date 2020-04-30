import * as TypeGraphQL from "type-graphql";
import { TagsOnProductsCreateWithoutProductInput } from "../inputs/TagsOnProductsCreateWithoutProductInput";
import { TagsOnProductsWhereUniqueInput } from "../inputs/TagsOnProductsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnProductsCreateManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [TagsOnProductsCreateWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  create?: TagsOnProductsCreateWithoutProductInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnProductsWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: TagsOnProductsWhereUniqueInput[] | null;
}
