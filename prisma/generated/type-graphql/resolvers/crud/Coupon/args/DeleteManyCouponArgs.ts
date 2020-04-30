import * as TypeGraphQL from "type-graphql";
import { CouponWhereInput } from "../../../inputs/CouponWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCouponArgs {
  @TypeGraphQL.Field(_type => CouponWhereInput, { nullable: true })
  where?: CouponWhereInput | null;
}
