import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPostsWhereUniqueInput } from "../../../inputs/CategoriesOnPostsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneCategoriesOnPostsArgs {
  @TypeGraphQL.Field(_type => CategoriesOnPostsWhereUniqueInput, { nullable: false })
  where!: CategoriesOnPostsWhereUniqueInput;
}
