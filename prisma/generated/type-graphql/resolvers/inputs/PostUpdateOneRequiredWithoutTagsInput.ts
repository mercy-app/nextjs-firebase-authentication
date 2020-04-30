import * as TypeGraphQL from "type-graphql";
import { PostCreateWithoutTagsInput } from "../inputs/PostCreateWithoutTagsInput";
import { PostUpdateWithoutTagsDataInput } from "../inputs/PostUpdateWithoutTagsDataInput";
import { PostUpsertWithoutTagsInput } from "../inputs/PostUpsertWithoutTagsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpdateOneRequiredWithoutTagsInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutTagsInput, {
    nullable: true,
    description: undefined
  })
  create?: PostCreateWithoutTagsInput | null;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: PostWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => PostUpdateWithoutTagsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: PostUpdateWithoutTagsDataInput | null;

  @TypeGraphQL.Field(_type => PostUpsertWithoutTagsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: PostUpsertWithoutTagsInput | null;
}
