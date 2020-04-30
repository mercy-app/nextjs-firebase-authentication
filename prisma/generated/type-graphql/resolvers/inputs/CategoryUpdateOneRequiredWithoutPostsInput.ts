import * as TypeGraphQL from "type-graphql";
import { CategoryCreateWithoutPostsInput } from "../inputs/CategoryCreateWithoutPostsInput";
import { CategoryUpdateWithoutPostsDataInput } from "../inputs/CategoryUpdateWithoutPostsDataInput";
import { CategoryUpsertWithoutPostsInput } from "../inputs/CategoryUpsertWithoutPostsInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryUpdateOneRequiredWithoutPostsInput {
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

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutPostsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: CategoryUpdateWithoutPostsDataInput | null;

  @TypeGraphQL.Field(_type => CategoryUpsertWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: CategoryUpsertWithoutPostsInput | null;
}
