import * as TypeGraphQL from "type-graphql";
import { FindOneBookingArgs } from "./args/FindOneBookingArgs";
import { Booking } from "../../../models/Booking";

@TypeGraphQL.Resolver(_of => Booking)
export class FindOneBookingResolver {
  @TypeGraphQL.Query(_returns => Booking, {
    nullable: true,
    description: undefined
  })
  async booking(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneBookingArgs): Promise<Booking | null> {
    return ctx.prisma.booking.findOne(args);
  }
}
