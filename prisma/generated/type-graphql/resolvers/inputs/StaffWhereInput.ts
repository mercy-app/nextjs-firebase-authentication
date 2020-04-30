import * as TypeGraphQL from "type-graphql";
import { CompanyWhereInput } from "../inputs/CompanyWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StaffWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  userId?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  companyId?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  role?: StringFilter | null;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | null;

  @TypeGraphQL.Field(_type => [StaffWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: StaffWhereInput[] | null;

  @TypeGraphQL.Field(_type => [StaffWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: StaffWhereInput[] | null;

  @TypeGraphQL.Field(_type => [StaffWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: StaffWhereInput[] | null;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true,
    description: undefined
  })
  user?: UserWhereInput | null;

  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true,
    description: undefined
  })
  company?: CompanyWhereInput | null;
}
