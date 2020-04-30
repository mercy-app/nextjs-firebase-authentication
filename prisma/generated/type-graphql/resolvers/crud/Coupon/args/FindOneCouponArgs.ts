import * as TypeGraphQL from "type-graphql";
import { CouponWhereUniqueInput } from "../../../inputs/CouponWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneCouponArgs {
  @TypeGraphQL.Field(_type => CouponWhereUniqueInput, { nullable: false })
  where!: CouponWhereUniqueInput;
}
