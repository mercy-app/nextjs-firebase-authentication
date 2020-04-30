import * as TypeGraphQL from "type-graphql";
import { CategoryUpdateOneRequiredWithoutPostsInput } from "../inputs/CategoryUpdateOneRequiredWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnPostsUpdateWithoutPostDataInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => CategoryUpdateOneRequiredWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  category?: CategoryUpdateOneRequiredWithoutPostsInput | null;
}
