import * as TypeGraphQL from "type-graphql";
import { CouponCreateWithoutProductsInput } from "../inputs/CouponCreateWithoutProductsInput";
import { CouponUpdateWithoutProductsDataInput } from "../inputs/CouponUpdateWithoutProductsDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CouponUpsertWithoutProductsInput {
  @TypeGraphQL.Field(_type => CouponUpdateWithoutProductsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CouponUpdateWithoutProductsDataInput;

  @TypeGraphQL.Field(_type => CouponCreateWithoutProductsInput, {
    nullable: false,
    description: undefined
  })
  create!: CouponCreateWithoutProductsInput;
}
