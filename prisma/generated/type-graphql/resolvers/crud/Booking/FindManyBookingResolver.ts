import * as TypeGraphQL from "type-graphql";
import { FindManyBookingArgs } from "./args/FindManyBookingArgs";
import { Booking } from "../../../models/Booking";

@TypeGraphQL.Resolver(_of => Booking)
export class FindManyBookingResolver {
  @TypeGraphQL.Query(_returns => [Booking], {
    nullable: false,
    description: undefined
  })
  async bookings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyBookingArgs): Promise<Booking[]> {
    return ctx.prisma.booking.findMany(args);
  }
}
