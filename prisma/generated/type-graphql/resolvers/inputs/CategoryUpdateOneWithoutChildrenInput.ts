import * as TypeGraphQL from "type-graphql";
import { CategoryCreateWithoutChildrenInput } from "../inputs/CategoryCreateWithoutChildrenInput";
import { CategoryUpdateWithoutChildrenDataInput } from "../inputs/CategoryUpdateWithoutChildrenDataInput";
import { CategoryUpsertWithoutChildrenInput } from "../inputs/CategoryUpsertWithoutChildrenInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryUpdateOneWithoutChildrenInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutChildrenInput, {
    nullable: true,
    description: undefined
  })
  create?: CategoryCreateWithoutChildrenInput | null;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: CategoryWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  disconnect?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  delete?: boolean | null;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutChildrenDataInput, {
    nullable: true,
    description: undefined
  })
  update?: CategoryUpdateWithoutChildrenDataInput | null;

  @TypeGraphQL.Field(_type => CategoryUpsertWithoutChildrenInput, {
    nullable: true,
    description: undefined
  })
  upsert?: CategoryUpsertWithoutChildrenInput | null;
}
