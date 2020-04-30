import * as TypeGraphQL from "type-graphql";
import { BookingOrderByInput } from "../../../inputs/BookingOrderByInput";
import { BookingWhereInput } from "../../../inputs/BookingWhereInput";
import { BookingWhereUniqueInput } from "../../../inputs/BookingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyBookingArgs {
  @TypeGraphQL.Field(_type => BookingWhereInput, { nullable: true })
  where?: BookingWhereInput | null;

  @TypeGraphQL.Field(_type => BookingOrderByInput, { nullable: true })
  orderBy?: BookingOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => BookingWhereUniqueInput, { nullable: true })
  after?: BookingWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => BookingWhereUniqueInput, { nullable: true })
  before?: BookingWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
