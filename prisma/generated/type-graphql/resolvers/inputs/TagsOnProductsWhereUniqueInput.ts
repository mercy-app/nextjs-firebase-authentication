import * as TypeGraphQL from "type-graphql";
import { ProductIdTagIdCompoundUniqueInput } from "../inputs/ProductIdTagIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnProductsWhereUniqueInput {
  @TypeGraphQL.Field(_type => ProductIdTagIdCompoundUniqueInput, {
    nullable: true,
    description: undefined
  })
  productId_tagId?: ProductIdTagIdCompoundUniqueInput | null;
}
