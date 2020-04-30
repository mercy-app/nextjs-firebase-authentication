import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPostsWhereInput } from "../inputs/CategoriesOnPostsWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnPostsFilter {
  @TypeGraphQL.Field(_type => CategoriesOnPostsWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: CategoriesOnPostsWhereInput | null;

  @TypeGraphQL.Field(_type => CategoriesOnPostsWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: CategoriesOnPostsWhereInput | null;

  @TypeGraphQL.Field(_type => CategoriesOnPostsWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: CategoriesOnPostsWhereInput | null;
}
