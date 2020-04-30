import * as TypeGraphQL from "type-graphql";
import { CouponCreateInput } from "../../../inputs/CouponCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCouponArgs {
  @TypeGraphQL.Field(_type => CouponCreateInput, { nullable: false })
  data!: CouponCreateInput;
}
