import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPostsCreateInput } from "../../../inputs/CategoriesOnPostsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCategoriesOnPostsArgs {
  @TypeGraphQL.Field(_type => CategoriesOnPostsCreateInput, { nullable: false })
  data!: CategoriesOnPostsCreateInput;
}
