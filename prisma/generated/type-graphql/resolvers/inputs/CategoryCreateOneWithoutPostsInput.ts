import * as TypeGraphQL from "type-graphql";
import { CategoryCreateWithoutPostsInput } from "../inputs/CategoryCreateWithoutPostsInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryCreateOneWithoutPostsInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  create?: CategoryCreateWithoutPostsInput | null;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: CategoryWhereUniqueInput | null;
}
