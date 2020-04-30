import * as TypeGraphQL from "type-graphql";
import { PostCreateWithoutTagsInput } from "../inputs/PostCreateWithoutTagsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PostCreateOneWithoutTagsInput {
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
}
