import * as TypeGraphQL from "type-graphql";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CustomerScalarWhereInput {
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

  @TypeGraphQL.Field(_type => [CustomerScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: CustomerScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CustomerScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: CustomerScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CustomerScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: CustomerScalarWhereInput[] | null;
}
