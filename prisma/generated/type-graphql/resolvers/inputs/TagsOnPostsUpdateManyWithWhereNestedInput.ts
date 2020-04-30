import * as TypeGraphQL from "type-graphql";
import { TagsOnPostsScalarWhereInput } from "../inputs/TagsOnPostsScalarWhereInput";
import { TagsOnPostsUpdateManyDataInput } from "../inputs/TagsOnPostsUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnPostsUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => TagsOnPostsScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: TagsOnPostsScalarWhereInput;

  @TypeGraphQL.Field(_type => TagsOnPostsUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: TagsOnPostsUpdateManyDataInput;
}
