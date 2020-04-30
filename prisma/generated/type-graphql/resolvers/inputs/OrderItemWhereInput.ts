import * as TypeGraphQL from "type-graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { OrderWhereInput } from "../inputs/OrderWhereInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderItemWhereInput {
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

  @TypeGraphQL.Field(_type => [OrderItemWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: OrderItemWhereInput[] | null;

  @TypeGraphQL.Field(_type => [OrderItemWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: OrderItemWhereInput[] | null;

  @TypeGraphQL.Field(_type => [OrderItemWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: OrderItemWhereInput[] | null;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true,
    description: undefined
  })
  product?: ProductWhereInput | null;

  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true,
    description: undefined
  })
  order?: OrderWhereInput | null;
}
