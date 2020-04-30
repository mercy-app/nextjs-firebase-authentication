import * as TypeGraphQL from "type-graphql";
import { TagCreateWithoutProductsInput } from "../inputs/TagCreateWithoutProductsInput";
import { TagUpdateWithoutProductsDataInput } from "../inputs/TagUpdateWithoutProductsDataInput";
import { TagUpsertWithoutProductsInput } from "../inputs/TagUpsertWithoutProductsInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagUpdateOneRequiredWithoutProductsInput {
  @TypeGraphQL.Field(_type => TagCreateWithoutProductsInput, {
    nullable: true,
    description: undefined
  })
  create?: TagCreateWithoutProductsInput | null;

  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: TagWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TagUpdateWithoutProductsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: TagUpdateWithoutProductsDataInput | null;

  @TypeGraphQL.Field(_type => TagUpsertWithoutProductsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: TagUpsertWithoutProductsInput | null;
}
