import * as TypeGraphQL from "type-graphql";
import { CategoryFilter } from "../inputs/CategoryFilter";
import { CompanyFilter } from "../inputs/CompanyFilter";
import { CountryWhereInput } from "../inputs/CountryWhereInput";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { ProductFilter } from "../inputs/ProductFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PlatformWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  title?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  link?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  label?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  icon?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  intlId?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  bannerImg?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  typeSlug?: StringFilter | null;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  content?: NullableStringFilter | null;

  @TypeGraphQL.Field(_type => ProductFilter, {
    nullable: true,
    description: undefined
  })
  products?: ProductFilter | null;

  @TypeGraphQL.Field(_type => CategoryFilter, {
    nullable: true,
    description: undefined
  })
  categories?: CategoryFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  platformType?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  countryId?: StringFilter | null;

  @TypeGraphQL.Field(_type => CompanyFilter, {
    nullable: true,
    description: undefined
  })
  company?: CompanyFilter | null;

  @TypeGraphQL.Field(_type => [PlatformWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: PlatformWhereInput[] | null;

  @TypeGraphQL.Field(_type => [PlatformWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: PlatformWhereInput[] | null;

  @TypeGraphQL.Field(_type => [PlatformWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: PlatformWhereInput[] | null;

  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true,
    description: undefined
  })
  country?: CountryWhereInput | null;
}
