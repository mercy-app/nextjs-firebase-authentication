import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPostsOrderByInput } from "../../../inputs/CategoriesOnPostsOrderByInput";
import { CategoriesOnPostsWhereInput } from "../../../inputs/CategoriesOnPostsWhereInput";
import { CategoriesOnPostsWhereUniqueInput } from "../../../inputs/CategoriesOnPostsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyCategoriesOnPostsArgs {
  @TypeGraphQL.Field(_type => CategoriesOnPostsWhereInput, { nullable: true })
  where?: CategoriesOnPostsWhereInput | null;

  @TypeGraphQL.Field(_type => CategoriesOnPostsOrderByInput, { nullable: true })
  orderBy?: CategoriesOnPostsOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => CategoriesOnPostsWhereUniqueInput, { nullable: true })
  after?: CategoriesOnPostsWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => CategoriesOnPostsWhereUniqueInput, { nullable: true })
  before?: CategoriesOnPostsWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
