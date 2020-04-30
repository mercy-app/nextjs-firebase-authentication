import * as TypeGraphQL from "type-graphql";
import { UpdateOneBookingArgs } from "./args/UpdateOneBookingArgs";
import { Booking } from "../../../models/Booking";

@TypeGraphQL.Resolver(_of => Booking)
export class UpdateOneBookingResolver {
  @TypeGraphQL.Mutation(_returns => Booking, {
    nullable: true,
    description: undefined
  })
  async updateOneBooking(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneBookingArgs): Promise<Booking | null> {
    return ctx.prisma.booking.update(args);
  }
}
