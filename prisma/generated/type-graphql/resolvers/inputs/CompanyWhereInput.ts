import * as TypeGraphQL from "type-graphql";
import { AddressWhereInput } from "../inputs/AddressWhereInput";
import { ContactWhereInput } from "../inputs/ContactWhereInput";
import { CountryWhereInput } from "../inputs/CountryWhereInput";
import { CustomerFilter } from "../inputs/CustomerFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { OrderFilter } from "../inputs/OrderFilter";
import { PlatformWhereInput } from "../inputs/PlatformWhereInput";
import { ProductFilter } from "../inputs/ProductFilter";
import { StaffFilter } from "../inputs/StaffFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyWhereInput {
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

  @TypeGraphQL.Field(_type => [CompanyWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: CompanyWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CompanyWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: CompanyWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CompanyWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: CompanyWhereInput[] | null;

  @TypeGraphQL.Field(_type => AddressWhereInput, {
    nullable: true,
    description: undefined
  })
  address?: AddressWhereInput | null;

  @TypeGraphQL.Field(_type => ContactWhereInput, {
    nullable: true,
    description: undefined
  })
  contact?: ContactWhereInput | null;

  @TypeGraphQL.Field(_type => PlatformWhereInput, {
    nullable: true,
    description: undefined
  })
  platform?: PlatformWhereInput | null;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true,
    description: undefined
  })
  owner?: UserWhereInput | null;

  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true,
    description: undefined
  })
  country?: CountryWhereInput | null;
}
