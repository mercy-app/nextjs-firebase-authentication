import * as TypeGraphQL from "type-graphql";
import { TagCreateWithoutPostsInput } from "../inputs/TagCreateWithoutPostsInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagCreateOneWithoutPostsInput {
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
}
