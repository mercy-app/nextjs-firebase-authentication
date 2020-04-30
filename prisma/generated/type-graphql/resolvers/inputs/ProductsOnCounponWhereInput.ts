import * as TypeGraphQL from "type-graphql";
import { CouponWhereInput } from "../inputs/CouponWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProductWhereInput } from "../inputs/ProductWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductsOnCounponWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  productId?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  couponId?: StringFilter | null;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | null;

  @TypeGraphQL.Field(_type => [ProductsOnCounponWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: ProductsOnCounponWhereInput[] | null;

  @TypeGraphQL.Field(_type => [ProductsOnCounponWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: ProductsOnCounponWhereInput[] | null;

  @TypeGraphQL.Field(_type => [ProductsOnCounponWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: ProductsOnCounponWhereInput[] | null;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true,
    description: undefined
  })
  product?: ProductWhereInput | null;

  @TypeGraphQL.Field(_type => CouponWhereInput, {
    nullable: true,
    description: undefined
  })
  coupon?: CouponWhereInput | null;
}
