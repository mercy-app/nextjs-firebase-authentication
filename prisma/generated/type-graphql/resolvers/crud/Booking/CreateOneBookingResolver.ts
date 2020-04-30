import * as TypeGraphQL from "type-graphql";
import { CreateOneBookingArgs } from "./args/CreateOneBookingArgs";
import { Booking } from "../../../models/Booking";

@TypeGraphQL.Resolver(_of => Booking)
export class CreateOneBookingResolver {
  @TypeGraphQL.Mutation(_returns => Booking, {
    nullable: false,
    description: undefined
  })
  async createOneBooking(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneBookingArgs): Promise<Booking> {
    return ctx.prisma.booking.create(args);
  }
}
