import * as TypeGraphQL from "type-graphql";
import { TagCreateWithoutProductsInput } from "../inputs/TagCreateWithoutProductsInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagCreateOneWithoutProductsInput {
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
}
