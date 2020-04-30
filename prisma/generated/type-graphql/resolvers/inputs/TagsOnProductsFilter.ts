import * as TypeGraphQL from "type-graphql";
import { TagsOnProductsWhereInput } from "../inputs/TagsOnProductsWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnProductsFilter {
  @TypeGraphQL.Field(_type => TagsOnProductsWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: TagsOnProductsWhereInput | null;

  @TypeGraphQL.Field(_type => TagsOnProductsWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: TagsOnProductsWhereInput | null;

  @TypeGraphQL.Field(_type => TagsOnProductsWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: TagsOnProductsWhereInput | null;
}
