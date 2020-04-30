import * as TypeGraphQL from "type-graphql";
import { AddressFilter } from "../inputs/AddressFilter";
import { CardFilter } from "../inputs/CardFilter";
import { CompanyFilter } from "../inputs/CompanyFilter";
import { ContactFilter } from "../inputs/ContactFilter";
import { CustomerFilter } from "../inputs/CustomerFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { PostFilter } from "../inputs/PostFilter";
import { StaffFilter } from "../inputs/StaffFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  email?: StringFilter | null;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  name?: NullableStringFilter | null;

  @TypeGraphQL.Field(_type => PostFilter, {
    nullable: true,
    description: undefined
  })
  posts?: PostFilter | null;

  @TypeGraphQL.Field(_type => CompanyFilter, {
    nullable: true,
    description: undefined
  })
  companies?: CompanyFilter | null;

  @TypeGraphQL.Field(_type => AddressFilter, {
    nullable: true,
    description: undefined
  })
  addresses?: AddressFilter | null;

  @TypeGraphQL.Field(_type => CardFilter, {
    nullable: true,
    description: undefined
  })
  cards?: CardFilter | null;

  @TypeGraphQL.Field(_type => ContactFilter, {
    nullable: true,
    description: undefined
  })
  contacts?: ContactFilter | null;

  @TypeGraphQL.Field(_type => StaffFilter, {
    nullable: true,
    description: undefined
  })
  staff?: StaffFilter | null;

  @TypeGraphQL.Field(_type => CustomerFilter, {
    nullable: true,
    description: undefined
  })
  customer?: CustomerFilter | null;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: UserWhereInput[] | null;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: UserWhereInput[] | null;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: UserWhereInput[] | null;
}
