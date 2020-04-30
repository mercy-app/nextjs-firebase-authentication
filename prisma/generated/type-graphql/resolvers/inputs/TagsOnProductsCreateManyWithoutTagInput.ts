import * as TypeGraphQL from "type-graphql";
import { TagsOnProductsCreateWithoutTagInput } from "../inputs/TagsOnProductsCreateWithoutTagInput";
import { TagsOnProductsWhereUniqueInput } from "../inputs/TagsOnProductsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnProductsCreateManyWithoutTagInput {
  @TypeGraphQL.Field(_type => [TagsOnProductsCreateWithoutTagInput], {
    nullable: true,
    description: undefined
  })
  create?: TagsOnProductsCreateWithoutTagInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnProductsWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: TagsOnProductsWhereUniqueInput[] | null;
}
