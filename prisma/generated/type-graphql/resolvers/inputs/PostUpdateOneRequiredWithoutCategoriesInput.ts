import * as TypeGraphQL from "type-graphql";
import { PostCreateWithoutCategoriesInput } from "../inputs/PostCreateWithoutCategoriesInput";
import { PostUpdateWithoutCategoriesDataInput } from "../inputs/PostUpdateWithoutCategoriesDataInput";
import { PostUpsertWithoutCategoriesInput } from "../inputs/PostUpsertWithoutCategoriesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpdateOneRequiredWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutCategoriesInput, {
    nullable: true,
    description: undefined
  })
  create?: PostCreateWithoutCategoriesInput | null;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: PostWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => PostUpdateWithoutCategoriesDataInput, {
    nullable: true,
    description: undefined
  })
  update?: PostUpdateWithoutCategoriesDataInput | null;

  @TypeGraphQL.Field(_type => PostUpsertWithoutCategoriesInput, {
    nullable: true,
    description: undefined
  })
  upsert?: PostUpsertWithoutCategoriesInput | null;
}
