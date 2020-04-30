import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPostsUpdateManyWithoutPostInput } from "../inputs/CategoriesOnPostsUpdateManyWithoutPostInput";
import { TagsOnPostsUpdateManyWithoutPostInput } from "../inputs/TagsOnPostsUpdateManyWithoutPostInput";
import { UserUpdateOneWithoutPostsInput } from "../inputs/UserUpdateOneWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpdateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  updatedAt?: Date | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  published?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  content?: string | null;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  author?: UserUpdateOneWithoutPostsInput | null;

  @TypeGraphQL.Field(_type => CategoriesOnPostsUpdateManyWithoutPostInput, {
    nullable: true,
    description: undefined
  })
  categories?: CategoriesOnPostsUpdateManyWithoutPostInput | null;

  @TypeGraphQL.Field(_type => TagsOnPostsUpdateManyWithoutPostInput, {
    nullable: true,
    description: undefined
  })
  tags?: TagsOnPostsUpdateManyWithoutPostInput | null;
}
