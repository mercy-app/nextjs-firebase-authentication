import * as TypeGraphQL from "type-graphql";
import { TagCreateWithoutPostsInput } from "../inputs/TagCreateWithoutPostsInput";
import { TagUpdateWithoutPostsDataInput } from "../inputs/TagUpdateWithoutPostsDataInput";
import { TagUpsertWithoutPostsInput } from "../inputs/TagUpsertWithoutPostsInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagUpdateOneRequiredWithoutPostsInput {
  @TypeGraphQL.Field(_type => TagCreateWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  create?: TagCreateWithoutPostsInput | null;

  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: TagWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TagUpdateWithoutPostsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: TagUpdateWithoutPostsDataInput | null;

  @TypeGraphQL.Field(_type => TagUpsertWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: TagUpsertWithoutPostsInput | null;
}
