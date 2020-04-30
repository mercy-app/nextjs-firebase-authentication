import * as TypeGraphQL from "type-graphql";
import { TagsOnProductsScalarWhereInput } from "../inputs/TagsOnProductsScalarWhereInput";
import { TagsOnProductsUpdateManyDataInput } from "../inputs/TagsOnProductsUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnProductsUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => TagsOnProductsScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: TagsOnProductsScalarWhereInput;

  @TypeGraphQL.Field(_type => TagsOnProductsUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: TagsOnProductsUpdateManyDataInput;
}
