import * as TypeGraphQL from "type-graphql";
import { CustomerFilter } from "../inputs/CustomerFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { OrderFilter } from "../inputs/OrderFilter";
import { ProductFilter } from "../inputs/ProductFilter";
import { StaffFilter } from "../inputs/StaffFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyScalarWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  description?: StringFilter | null;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  ownerId?: NullableStringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  platformId?: StringFilter | null;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  countryId?: NullableStringFilter | null;

  @TypeGraphQL.Field(_type => ProductFilter, {
    nullable: true,
    description: undefined
  })
  products?: ProductFilter | null;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  customerId?: NullableStringFilter | null;

  @TypeGraphQL.Field(_type => StaffFilter, {
    nullable: true,
    description: undefined
  })
  staffs?: StaffFilter | null;

  @TypeGraphQL.Field(_type => CustomerFilter, {
    nullable: true,
    description: undefined
  })
  customers?: CustomerFilter | null;

  @TypeGraphQL.Field(_type => OrderFilter, {
    nullable: true,
    description: undefined
  })
  order?: OrderFilter | null;

  @TypeGraphQL.Field(_type => [CompanyScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: CompanyScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CompanyScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: CompanyScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CompanyScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: CompanyScalarWhereInput[] | null;
}
