import * as TypeGraphQL from "type-graphql";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContactScalarWhereInput {
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
  number?: StringFilter | null;

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

  @TypeGraphQL.Field(_type => [ContactScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: ContactScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [ContactScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: ContactScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [ContactScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: ContactScalarWhereInput[] | null;
}
