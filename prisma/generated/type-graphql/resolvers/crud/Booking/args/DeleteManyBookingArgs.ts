import * as TypeGraphQL from "type-graphql";
import { BookingWhereInput } from "../../../inputs/BookingWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBookingArgs {
  @TypeGraphQL.Field(_type => BookingWhereInput, { nullable: true })
  where?: BookingWhereInput | null;
}
