import * as TypeGraphQL from "type-graphql";
import { CompanyFilter } from "../inputs/CompanyFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { ProductFilter } from "../inputs/ProductFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PlatformScalarWhereInput {
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
  type?: StringFilter | null;

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

  @TypeGraphQL.Field(_type => [PlatformScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: PlatformScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [PlatformScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: PlatformScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [PlatformScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: PlatformScalarWhereInput[] | null;
}
