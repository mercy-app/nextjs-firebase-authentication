import * as TypeGraphQL from "type-graphql";
import { CategoryCreateWithoutParentInput } from "../inputs/CategoryCreateWithoutParentInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryCreateManyWithoutParentInput {
  @TypeGraphQL.Field(_type => [CategoryCreateWithoutParentInput], {
    nullable: true,
    description: undefined
  })
  create?: CategoryCreateWithoutParentInput[] | null;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CategoryWhereUniqueInput[] | null;
}
