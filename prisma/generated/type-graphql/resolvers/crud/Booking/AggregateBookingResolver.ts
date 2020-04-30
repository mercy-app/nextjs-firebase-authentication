import * as TypeGraphQL from "type-graphql";
import { Booking } from "../../../models/Booking";
import { AggregateBooking } from "../../outputs/AggregateBooking";

@TypeGraphQL.Resolver(_of => Booking)
export class AggregateBookingResolver {
  @TypeGraphQL.Query(_returns => AggregateBooking, {
    nullable: false,
    description: undefined
  })
  async aggregateBooking(): Promise<AggregateBooking> {
    return new AggregateBooking();
  }
}
