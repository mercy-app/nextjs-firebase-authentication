import * as TypeGraphQL from "type-graphql";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProductWhereInput } from "../inputs/ProductWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnProductsWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  productId?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  categoryId?: StringFilter | null;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | null;

  @TypeGraphQL.Field(_type => [CategoriesOnProductsWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: CategoriesOnProductsWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnProductsWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: CategoriesOnProductsWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnProductsWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: CategoriesOnProductsWhereInput[] | null;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true,
    description: undefined
  })
  product?: ProductWhereInput | null;

  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true,
    description: undefined
  })
  category?: CategoryWhereInput | null;
}
