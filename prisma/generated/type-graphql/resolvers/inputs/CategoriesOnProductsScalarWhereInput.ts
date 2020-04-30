import * as TypeGraphQL from "type-graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnProductsScalarWhereInput {
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

  @TypeGraphQL.Field(_type => [CategoriesOnProductsScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: CategoriesOnProductsScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnProductsScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: CategoriesOnProductsScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CategoriesOnProductsScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: CategoriesOnProductsScalarWhereInput[] | null;
}
