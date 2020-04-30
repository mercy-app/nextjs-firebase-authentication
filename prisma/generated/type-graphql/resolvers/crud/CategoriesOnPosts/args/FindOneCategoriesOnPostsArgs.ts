import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPostsWhereUniqueInput } from "../../../inputs/CategoriesOnPostsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneCategoriesOnPostsArgs {
  @TypeGraphQL.Field(_type => CategoriesOnPostsWhereUniqueInput, { nullable: false })
  where!: CategoriesOnPostsWhereUniqueInput;
}
