import * as TypeGraphQL from "type-graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProductsOnCounponFilter } from "../inputs/ProductsOnCounponFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CouponWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  title?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  code?: StringFilter | null;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  discountInPercent?: IntFilter | null;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  numberOfCoupon?: IntFilter | null;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  numberOfUnusedCoupon?: IntFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  status?: StringFilter | null;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  expirationDate?: DateTimeFilter | null;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | null;

  @TypeGraphQL.Field(_type => ProductsOnCounponFilter, {
    nullable: true,
    description: undefined
  })
  products?: ProductsOnCounponFilter | null;

  @TypeGraphQL.Field(_type => [CouponWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: CouponWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CouponWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: CouponWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CouponWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: CouponWhereInput[] | null;
}
