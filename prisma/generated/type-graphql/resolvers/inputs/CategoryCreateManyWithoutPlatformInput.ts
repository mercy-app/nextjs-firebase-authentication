import * as TypeGraphQL from "type-graphql";
import { CategoryCreateWithoutPlatformInput } from "../inputs/CategoryCreateWithoutPlatformInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryCreateManyWithoutPlatformInput {
  @TypeGraphQL.Field(_type => [CategoryCreateWithoutPlatformInput], {
    nullable: true,
    description: undefined
  })
  create?: CategoryCreateWithoutPlatformInput[] | null;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CategoryWhereUniqueInput[] | null;
}
