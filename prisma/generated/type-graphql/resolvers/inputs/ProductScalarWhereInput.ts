import * as TypeGraphQL from "type-graphql";
import { BooleanFilter } from "../inputs/BooleanFilter";
import { CategoriesOnProductsFilter } from "../inputs/CategoriesOnProductsFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { NullableFloatFilter } from "../inputs/NullableFloatFilter";
import { NullableIntFilter } from "../inputs/NullableIntFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { OrderItemFilter } from "../inputs/OrderItemFilter";
import { ProductsOnCounponFilter } from "../inputs/ProductsOnCounponFilter";
import { RoomFilter } from "../inputs/RoomFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TagsOnProductsFilter } from "../inputs/TagsOnProductsFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductScalarWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | null;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | null;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  updatedAt?: DateTimeFilter | null;

  @TypeGraphQL.Field(_type => BooleanFilter, {
    nullable: true,
    description: undefined
  })
  published?: BooleanFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  title?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  companyId?: StringFilter | null;

  @TypeGraphQL.Field(_type => CategoriesOnProductsFilter, {
    nullable: true,
    description: undefined
  })
  categories?: CategoriesOnProductsFilter | null;

  @TypeGraphQL.Field(_type => NullableFloatFilter, {
    nullable: true,
    description: undefined
  })
  price?: NullableFloatFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  platformId?: StringFilter | null;

  @TypeGraphQL.Field(_type => TagsOnProductsFilter, {
    nullable: true,
    description: undefined
  })
  tags?: TagsOnProductsFilter | null;

  @TypeGraphQL.Field(_type => OrderItemFilter, {
    nullable: true,
    description: undefined
  })
  orders?: OrderItemFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  slug?: StringFilter | null;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  unit?: NullableStringFilter | null;

  @TypeGraphQL.Field(_type => NullableFloatFilter, {
    nullable: true,
    description: undefined
  })
  salePrice?: NullableFloatFilter | null;

  @TypeGraphQL.Field(_type => NullableIntFilter, {
    nullable: true,
    description: undefined
  })
  discountInPercent?: NullableIntFilter | null;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  description?: NullableStringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  type?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  image?: StringFilter | null;

  @TypeGraphQL.Field(_type => ProductsOnCounponFilter, {
    nullable: true,
    description: undefined
  })
  productsOnCounpon?: ProductsOnCounponFilter | null;

  @TypeGraphQL.Field(_type => RoomFilter, {
    nullable: true,
    description: undefined
  })
  room?: RoomFilter | null;

  @TypeGraphQL.Field(_type => [ProductScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: ProductScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [ProductScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: ProductScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [ProductScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: ProductScalarWhereInput[] | null;
}
