import * as TypeGraphQL from "type-graphql";
import { ProductsOnCounponCreateManyWithoutCouponInput } from "../inputs/ProductsOnCounponCreateManyWithoutCouponInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CouponCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  code!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  discountInPercent!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  numberOfCoupon!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  numberOfUnusedCoupon!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  status!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined
  })
  expirationDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => ProductsOnCounponCreateManyWithoutCouponInput, {
    nullable: true,
    description: undefined
  })
  products?: ProductsOnCounponCreateManyWithoutCouponInput | null;
}
