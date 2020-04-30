import * as TypeGraphQL from "type-graphql";
import { CategoryCreateWithoutProductsInput } from "../inputs/CategoryCreateWithoutProductsInput";
import { CategoryUpdateWithoutProductsDataInput } from "../inputs/CategoryUpdateWithoutProductsDataInput";
import { CategoryUpsertWithoutProductsInput } from "../inputs/CategoryUpsertWithoutProductsInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryUpdateOneRequiredWithoutProductsInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutProductsInput, {
    nullable: true,
    description: undefined
  })
  create?: CategoryCreateWithoutProductsInput | null;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: CategoryWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutProductsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: CategoryUpdateWithoutProductsDataInput | null;

  @TypeGraphQL.Field(_type => CategoryUpsertWithoutProductsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: CategoryUpsertWithoutProductsInput | null;
}
