import * as TypeGraphQL from "type-graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProductWhereInput } from "../inputs/ProductWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { TagWhereInput } from "../inputs/TagWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnProductsWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  productId?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  tagId?: StringFilter | null;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | null;

  @TypeGraphQL.Field(_type => [TagsOnProductsWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: TagsOnProductsWhereInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnProductsWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: TagsOnProductsWhereInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnProductsWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: TagsOnProductsWhereInput[] | null;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true,
    description: undefined
  })
  product?: ProductWhereInput | null;

  @TypeGraphQL.Field(_type => TagWhereInput, {
    nullable: true,
    description: undefined
  })
  tag?: TagWhereInput | null;
}
