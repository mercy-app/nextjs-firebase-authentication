import * as TypeGraphQL from "type-graphql";
import { CouponUpdateManyMutationInput } from "../../../inputs/CouponUpdateManyMutationInput";
import { CouponWhereInput } from "../../../inputs/CouponWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCouponArgs {
  @TypeGraphQL.Field(_type => CouponUpdateManyMutationInput, { nullable: false })
  data!: CouponUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CouponWhereInput, { nullable: true })
  where?: CouponWhereInput | null;
}
