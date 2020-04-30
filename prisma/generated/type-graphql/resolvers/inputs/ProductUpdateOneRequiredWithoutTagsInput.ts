import * as TypeGraphQL from "type-graphql";
import { ProductCreateWithoutTagsInput } from "../inputs/ProductCreateWithoutTagsInput";
import { ProductUpdateWithoutTagsDataInput } from "../inputs/ProductUpdateWithoutTagsDataInput";
import { ProductUpsertWithoutTagsInput } from "../inputs/ProductUpsertWithoutTagsInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductUpdateOneRequiredWithoutTagsInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutTagsInput, {
    nullable: true,
    description: undefined
  })
  create?: ProductCreateWithoutTagsInput | null;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: ProductWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutTagsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: ProductUpdateWithoutTagsDataInput | null;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutTagsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: ProductUpsertWithoutTagsInput | null;
}
