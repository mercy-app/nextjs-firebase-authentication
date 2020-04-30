import * as TypeGraphQL from "type-graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderItemScalarWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  productId?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  orderId?: StringFilter | null;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | null;

  @TypeGraphQL.Field(_type => [OrderItemScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: OrderItemScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [OrderItemScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: OrderItemScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [OrderItemScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: OrderItemScalarWhereInput[] | null;
}
