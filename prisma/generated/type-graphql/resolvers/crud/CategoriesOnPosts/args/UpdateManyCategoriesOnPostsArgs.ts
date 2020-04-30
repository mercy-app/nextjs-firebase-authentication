import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPostsUpdateManyMutationInput } from "../../../inputs/CategoriesOnPostsUpdateManyMutationInput";
import { CategoriesOnPostsWhereInput } from "../../../inputs/CategoriesOnPostsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCategoriesOnPostsArgs {
  @TypeGraphQL.Field(_type => CategoriesOnPostsUpdateManyMutationInput, { nullable: false })
  data!: CategoriesOnPostsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CategoriesOnPostsWhereInput, { nullable: true })
  where?: CategoriesOnPostsWhereInput | null;
}
