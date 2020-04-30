import * as TypeGraphQL from "type-graphql";
import { CompanyWhereInput } from "../inputs/CompanyWhereInput";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CustomerWhereInput {
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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  totalOrder?: IntFilter | null;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  totalOrderAmount?: IntFilter | null;

  @TypeGraphQL.Field(_type => [CustomerWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: CustomerWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CustomerWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: CustomerWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CustomerWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: CustomerWhereInput[] | null;

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
