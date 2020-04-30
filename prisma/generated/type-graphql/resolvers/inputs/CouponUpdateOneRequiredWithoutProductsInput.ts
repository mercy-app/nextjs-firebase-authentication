import * as TypeGraphQL from "type-graphql";
import { CouponCreateWithoutProductsInput } from "../inputs/CouponCreateWithoutProductsInput";
import { CouponUpdateWithoutProductsDataInput } from "../inputs/CouponUpdateWithoutProductsDataInput";
import { CouponUpsertWithoutProductsInput } from "../inputs/CouponUpsertWithoutProductsInput";
import { CouponWhereUniqueInput } from "../inputs/CouponWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CouponUpdateOneRequiredWithoutProductsInput {
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

  @TypeGraphQL.Field(_type => CouponUpdateWithoutProductsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: CouponUpdateWithoutProductsDataInput | null;

  @TypeGraphQL.Field(_type => CouponUpsertWithoutProductsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: CouponUpsertWithoutProductsInput | null;
}
