import * as TypeGraphQL from "type-graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StaffScalarWhereInput {
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

  @TypeGraphQL.Field(_type => [StaffScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: StaffScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [StaffScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: StaffScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [StaffScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: StaffScalarWhereInput[] | null;
}
