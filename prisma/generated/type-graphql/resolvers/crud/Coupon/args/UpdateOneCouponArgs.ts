import * as TypeGraphQL from "type-graphql";
import { CouponUpdateInput } from "../../../inputs/CouponUpdateInput";
import { CouponWhereUniqueInput } from "../../../inputs/CouponWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCouponArgs {
  @TypeGraphQL.Field(_type => CouponUpdateInput, { nullable: false })
  data!: CouponUpdateInput;

  @TypeGraphQL.Field(_type => CouponWhereUniqueInput, { nullable: false })
  where!: CouponWhereUniqueInput;
}
