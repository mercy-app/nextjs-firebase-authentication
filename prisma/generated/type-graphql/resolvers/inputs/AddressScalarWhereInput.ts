import * as TypeGraphQL from "type-graphql";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class AddressScalarWhereInput {
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

  @TypeGraphQL.Field(_type => [AddressScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: AddressScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [AddressScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: AddressScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [AddressScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: AddressScalarWhereInput[] | null;
}
