import * as TypeGraphQL from "type-graphql";
import { BookingWhereUniqueInput } from "../../../inputs/BookingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneBookingArgs {
  @TypeGraphQL.Field(_type => BookingWhereUniqueInput, { nullable: false })
  where!: BookingWhereUniqueInput;
}
