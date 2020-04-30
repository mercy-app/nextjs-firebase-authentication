import * as TypeGraphQL from "type-graphql";
import { PostCreateWithoutCategoriesInput } from "../inputs/PostCreateWithoutCategoriesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PostCreateOneWithoutCategoriesInput {
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
}
