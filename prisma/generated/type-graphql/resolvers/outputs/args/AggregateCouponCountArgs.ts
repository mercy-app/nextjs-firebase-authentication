import * as TypeGraphQL from "type-graphql";
import { CouponOrderByInput } from "../../inputs/CouponOrderByInput";
import { CouponWhereInput } from "../../inputs/CouponWhereInput";
import { CouponWhereUniqueInput } from "../../inputs/CouponWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCouponCountArgs {
  @TypeGraphQL.Field(_type => CouponWhereInput, { nullable: true })
  where?: CouponWhereInput | null;

  @TypeGraphQL.Field(_type => CouponOrderByInput, { nullable: true })
  orderBy?: CouponOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => CouponWhereUniqueInput, { nullable: true })
  after?: CouponWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => CouponWhereUniqueInput, { nullable: true })
  before?: CouponWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
