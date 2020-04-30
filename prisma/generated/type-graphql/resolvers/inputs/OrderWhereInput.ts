import * as TypeGraphQL from "type-graphql";
import { CompanyWhereInput } from "../inputs/CompanyWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { OrderItemFilter } from "../inputs/OrderItemFilter";
import { StatusFilter } from "../inputs/StatusFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | null;

  @TypeGraphQL.Field(_type => StatusFilter, {
    nullable: true,
    description: undefined
  })
  status?: StatusFilter | null;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true,
    description: undefined
  })
  amount?: FloatFilter | null;

  @TypeGraphQL.Field(_type => OrderItemFilter, {
    nullable: true,
    description: undefined
  })
  products?: OrderItemFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  companyId?: StringFilter | null;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  deliveryTime?: DateTimeFilter | null;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  paymentMethod?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  deliveryAddress?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  contactNumber?: StringFilter | null;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true,
    description: undefined
  })
  subtotal?: FloatFilter | null;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true,
    description: undefined
  })
  discount?: FloatFilter | null;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true,
    description: undefined
  })
  deliveryFee?: FloatFilter | null;

  @TypeGraphQL.Field(_type => [OrderWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: OrderWhereInput[] | null;

  @TypeGraphQL.Field(_type => [OrderWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: OrderWhereInput[] | null;

  @TypeGraphQL.Field(_type => [OrderWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: OrderWhereInput[] | null;

  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true,
    description: undefined
  })
  company?: CompanyWhereInput | null;
}
