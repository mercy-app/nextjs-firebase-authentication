import * as TypeGraphQL from "type-graphql";
import { CategoriesOnPostsCreateManyWithoutPostInput } from "../inputs/CategoriesOnPostsCreateManyWithoutPostInput";
import { UserCreateOneWithoutPostsInput } from "../inputs/UserCreateOneWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PostCreateWithoutTagsInput {
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
    nullable: false,
    description: undefined
  })
  published!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  content?: string | null;

  @TypeGraphQL.Field(_type => UserCreateOneWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  author?: UserCreateOneWithoutPostsInput | null;

  @TypeGraphQL.Field(_type => CategoriesOnPostsCreateManyWithoutPostInput, {
    nullable: true,
    description: undefined
  })
  categories?: CategoriesOnPostsCreateManyWithoutPostInput | null;
}
