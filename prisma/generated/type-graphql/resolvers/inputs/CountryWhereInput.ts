import * as TypeGraphQL from "type-graphql";
import { CompanyFilter } from "../inputs/CompanyFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PlatformFilter } from "../inputs/PlatformFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CountryWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | null;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  code?: IntFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  currency?: StringFilter | null;

  @TypeGraphQL.Field(_type => CompanyFilter, {
    nullable: true,
    description: undefined
  })
  company?: CompanyFilter | null;

  @TypeGraphQL.Field(_type => PlatformFilter, {
    nullable: true,
    description: undefined
  })
  platform?: PlatformFilter | null;

  @TypeGraphQL.Field(_type => [CountryWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: CountryWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CountryWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: CountryWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CountryWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: CountryWhereInput[] | null;
}
