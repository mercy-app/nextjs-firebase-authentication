import * as TypeGraphQL from "type-graphql";
import { BookingCreateInput } from "../../../inputs/BookingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneBookingArgs {
  @TypeGraphQL.Field(_type => BookingCreateInput, { nullable: false })
  data!: BookingCreateInput;
}
