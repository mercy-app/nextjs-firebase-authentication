import * as TypeGraphQL from "type-graphql";
import { DeleteOneBookingArgs } from "./args/DeleteOneBookingArgs";
import { Booking } from "../../../models/Booking";

@TypeGraphQL.Resolver(_of => Booking)
export class DeleteOneBookingResolver {
  @TypeGraphQL.Mutation(_returns => Booking, {
    nullable: true,
    description: undefined
  })
  async deleteOneBooking(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneBookingArgs): Promise<Booking | null> {
    return ctx.prisma.booking.delete(args);
  }
}
