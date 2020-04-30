import * as TypeGraphQL from "type-graphql";
import { CompanyWhereInput } from "../inputs/CompanyWhereInput";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class AddressWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  type?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringFilter | null;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  json?: NullableStringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  info?: StringFilter | null;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  companyId?: NullableStringFilter | null;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  userId?: NullableStringFilter | null;

  @TypeGraphQL.Field(_type => [AddressWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: AddressWhereInput[] | null;

  @TypeGraphQL.Field(_type => [AddressWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: AddressWhereInput[] | null;

  @TypeGraphQL.Field(_type => [AddressWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: AddressWhereInput[] | null;

  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true,
    description: undefined
  })
  company?: CompanyWhereInput | null;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true,
    description: undefined
  })
  user?: UserWhereInput | null;
}
