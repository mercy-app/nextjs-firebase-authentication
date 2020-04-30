import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPostsWhereInput } from "../../../inputs/CategoriesOnPostsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCategoriesOnPostsArgs {
  @TypeGraphQL.Field(_type => CategoriesOnPostsWhereInput, { nullable: true })
  where?: CategoriesOnPostsWhereInput | null;
}
