import * as TypeGraphQL from "type-graphql";
import { ProductsOnCounponCreateWithoutCouponInput } from "../inputs/ProductsOnCounponCreateWithoutCouponInput";
import { ProductsOnCounponWhereUniqueInput } from "../inputs/ProductsOnCounponWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductsOnCounponCreateManyWithoutCouponInput {
  @TypeGraphQL.Field(_type => [ProductsOnCounponCreateWithoutCouponInput], {
    nullable: true,
    description: undefined
  })
  create?: ProductsOnCounponCreateWithoutCouponInput[] | null;

  @TypeGraphQL.Field(_type => [ProductsOnCounponWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: ProductsOnCounponWhereUniqueInput[] | null;
}
