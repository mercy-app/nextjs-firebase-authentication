import * as TypeGraphQL from "type-graphql";
import { Coupon } from "../models/Coupon";
import { Product } from "../models/Product";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class ProductsOnCounpon {
  product?: Product;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  productId!: string;

  coupon?: Coupon;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  couponId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  createdAt!: Date;
}
