import * as TypeGraphQL from "type-graphql";
import { CouponCreateWithoutProductsInput } from "../inputs/CouponCreateWithoutProductsInput";
import { CouponWhereUniqueInput } from "../inputs/CouponWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CouponCreateOneWithoutProductsInput {
  @TypeGraphQL.Field(_type => CouponCreateWithoutProductsInput, {
    nullable: true,
    description: undefined
  })
  create?: CouponCreateWithoutProductsInput | null;

  @TypeGraphQL.Field(_type => CouponWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: CouponWhereUniqueInput | null;
}
