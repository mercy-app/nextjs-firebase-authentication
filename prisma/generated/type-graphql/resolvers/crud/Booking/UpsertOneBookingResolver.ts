import * as TypeGraphQL from "type-graphql";
import { UpsertOneBookingArgs } from "./args/UpsertOneBookingArgs";
import { Booking } from "../../../models/Booking";

@TypeGraphQL.Resolver(_of => Booking)
export class UpsertOneBookingResolver {
  @TypeGraphQL.Mutation(_returns => Booking, {
    nullable: false,
    description: undefined
  })
  async upsertOneBooking(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneBookingArgs): Promise<Booking> {
    return ctx.prisma.booking.upsert(args);
  }
}
