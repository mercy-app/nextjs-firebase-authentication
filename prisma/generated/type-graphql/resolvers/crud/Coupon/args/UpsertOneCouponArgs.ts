import * as TypeGraphQL from "type-graphql";
import { CouponCreateInput } from "../../../inputs/CouponCreateInput";
import { CouponUpdateInput } from "../../../inputs/CouponUpdateInput";
import { CouponWhereUniqueInput } from "../../../inputs/CouponWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCouponArgs {
  @TypeGraphQL.Field(_type => CouponWhereUniqueInput, { nullable: false })
  where!: CouponWhereUniqueInput;

  @TypeGraphQL.Field(_type => CouponCreateInput, { nullable: false })
  create!: CouponCreateInput;

  @TypeGraphQL.Field(_type => CouponUpdateInput, { nullable: false })
  update!: CouponUpdateInput;
}
